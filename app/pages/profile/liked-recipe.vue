<script setup>
import { useSupabaseClient, useSupabaseUser } from '#build/imports';
import { fetchRecipeDetails } from '@/services/api/recipes';

const supabase = useSupabaseClient(); // Supabase client pour interagir avec la base de données.
const user = useSupabaseUser();       // Utilisateur connecté récupéré depuis Supabase.

const likedRecipes = ref([]);   // Liste réactive des recettes likées.
const loading = ref(true);      // Indicateur de chargement pour la récupération des données.

/**
 * Récupère les recettes likées depuis Supabase et leurs détails depuis l'API externe.
 *
 * @async
 * @function fetchLikedRecipes
 * @throws {Error} Si une erreur survient lors de la récupération des données.
 * @returns {Promise<void>} Ne retourne rien explicitement, met à jour `likedRecipes`.
 */
const fetchLikedRecipes = async () => {
  if (!user.value) {
    console.error('User not logged in.');
    return;
  }

  try {

    // Récupérer les IDs des recettes likées depuis Supabase
    const { data: likedData, error } = await supabase
      .from('likes')
      .select('recipe_id')
      .eq('user_id', user.value.id);

    if (error) {
      throw new Error('Error retrieving likes from Supabase: ' + error.message);
    }

    // Extraire les IDs des recettes likées
    const recipeIds = likedData.map((like) => like.recipe_id);

    // Récupérer les détails des recettes pour chaque ID
    const runtimeConfig = useRuntimeConfig();

    // Récupération des détails des recettes pour chaque ID
    const recipesPromises = recipeIds.map((id) =>
      fetchRecipeDetails(id, runtimeConfig)
    );

    /**
     * Attendre la résolution de toutes les promesses dans recipesPromises.
     * Chaque promesse représente un appel API pour récupérer les détails d'une recettes.
     * Promise.all exécute ces appels en parallèle, ce qui améliore les performances
     * en réduisant le temps total d'attente (temps = durée de la requête la plus longue).
     * Une fois toutes les promesses résolues, recipes contiendra un tableau des données des recettes.
     * 
     * À envisager dans une prochaine version : Stocker les données résultantes dans le localStorage
     * pour éviter des appels API répétitifs et améliorer les performances lors des interactions suivantes.
     */
    const recipes = await Promise.all(recipesPromises);

    // Mise à jour des recettes likées
    likedRecipes.value = recipes;
  } catch (error) {
    console.error('Error retrieving liked recipes:', error);
  }
};

/**
 * Action déclenchée au montage du composant.
 * Charge les recettes likées pour l'utilisateur connecté.
 *
 * @async
 * @function onMounted
 * @returns {Promise<void>} Ne retourne rien explicitement, gère l'état de `loading`.
 */
onMounted(async () => {
  loading.value = true;
  await fetchLikedRecipes();
  loading.value = false;
});

</script>

<template>
  <section class="liked-recipes-page" aria-label="Liked Recipes Page">
    <h1>Mes Recettes Likées</h1>
    <LoadingSpinner v-if="loading" />
    <div v-else-if="likedRecipes.length === 0">No liked recipes found.</div>
    <ul class="recipe-list" aria-label="List of liked recipes" v-for="recipe in likedRecipes" :key="recipe.id">
      <RecipeCard :recipe="recipe" aria-label="Recipe card for {{ recipe.title }}" />
    </ul>
  </section>
</template>

<style scoped>
.liked-recipes-page {
  width: 80%;
  margin: auto;
  padding: var(--spacing-lg);
}

.recipe-list {
  margin-top: 40px;
  display: grid;
  gap: 20px;
}

@media (min-width: 1024px) {
  .recipe-list {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .recipe-list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 767px) {
  .recipe-list {
    grid-template-columns: 1fr;
  }
}
</style>
