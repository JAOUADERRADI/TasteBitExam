<script setup>
/**
 * Importer le service pour récupérer les détails des recettes.
 */
import { fetchRecipeDetails } from '@/services/api/recipes';

/**
 * Récupérer les données dynamiques via la route.
 * @const {Object} route - L'objet représentant la route actuelle.
 * @property {Object} params - Les paramètres dynamiques de la route.
 * @property {string} params.id - L'identifiant de la recette extrait de l'URL.
 */
const route = useRoute();

/**
 * Identifiant unique de la recette.
 * @const {string} recipeId - L'identifiant unique de la recette récupéré à partir de la route.
 */
const recipeId = route.params.id;

/**
 * Détails de la recette.
 * @const {Ref<null|Object>} recipe - Une référence réactive pour stocker les détails de la recette.
 */
const recipe = ref(null);

/**
 * Charge les détails de la recette depuis l'API.
 * @async
 * @function loadRecipeDetails
 * @returns {Promise<void>} - Une promesse qui se résout après le chargement des détails de la recette.
 * @throws {Error} - Si une erreur survient lors du chargement des données.
 */
const loadRecipeDetails = async () => {
  try {
    const runtimeConfig = useRuntimeConfig();
    recipe.value = await fetchRecipeDetails(recipeId, runtimeConfig);
  } catch (error) {
    console.error('Error while loading the recipe details:', error);
  }
};

/**
 * Imprime la page actuelle.
 * @function printPage
 * @returns {void}
 */
function printPage() {
  window.print();
}

/**
 * Hook qui charge les détails de la recette au montage du composant.
 */
onMounted(() => {
  loadRecipeDetails();
});
</script>

<template>
  <div class="recipe-page">
    <!-- Loader en attendant les données -->
    <div v-if="!recipe" class="loading">
      <p>Loading recipe details...</p>
    </div>

    <!-- Contenu de la recette -->
    <div v-else class="recipe-container">
      <h1 class="recipe-title">{{ recipe.title }}</h1>

      <!-- Image principale -->
      <div class="recipe-image-container">
        <NuxtImg :src="recipe.image" :alt="recipe.title" class="recipe-image" format="webp" />
      </div>

      <!-- Informations générales -->
      <div class="recipe-info">
        <div class="info-items">

          <!-- Temps de préparation -->
          <div class="info-item">
            <p>
              <strong>
                <Icon name="fa-solid:clock" />
              </strong> 
              {{ recipe.readyInMinutes }} minutes
            </p>
          </div>

          <!-- Nombre de personnes -->
          <div class="info-item">
            <p>
              <strong>
                <Icon name="fa-solid:user" />
              </strong> 
              {{ recipe.servings }} people
            </p>
          </div>

          <!-- Bouton imprimer -->
          <div class="info-item">
            <p>
              <strong>
                <Icon name="fa-solid:print" @click="printPage"/>
              </strong>
              Print
            </p>
          </div>

        </div>
        <p>{{ recipe.summary }}</p>
      </div>

      <!-- Ingrédients -->
      <div class="recipe-section">
        <h3 class="section-title">Ingredients</h3>
        <ul class="ingredients-list">
          <li v-for="ingredient in recipe.extendedIngredients" :key="ingredient.id" class="ingredient-item">
            {{ ingredient.original }}
          </li>
        </ul>
      </div>

      <!-- Instructions -->
      <div class="recipe-section">
        <h3 class="section-title">Instructions</h3>
        <div class="instructions" v-html="recipe.instructions"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/************************************
 * Général
 ************************************/
.recipe-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-lg);
}

.loading {
  text-align: center;
  font-size: 1.2em;
  color: var(--text-color);
  padding: var(--spacing-xl) 0;
}

/************************************
 * Titre de la recette
 ************************************/
.recipe-title {
  font-size: 2.5em;
  font-weight: bold;
  text-align: center;
  margin-bottom: var(--spacing-lg);
  color: var(--text-color);
}

/************************************
 * Image principale
 ************************************/
.recipe-image-container {
  max-width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: var(--spacing-lg);
}

.recipe-image {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/************************************
 * Informations générales
 ************************************/
.recipe-info {
  background: var(--bg-accent-color);
  padding: var(--spacing-md);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: var(--spacing-lg);
  color: var(--text-color);
}

.recipe-info strong {
  color: var(--accent-color);
}

.info-items {
  max-width: 350px;
  padding-bottom: 12px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/************************************
 * Ingrédients et Instructions
 ************************************/
.recipe-section {
  margin-bottom: var(--spacing-lg);
}

.section-title {
  font-size: 1.8em;
  color: var(--accent-color);
  border-bottom: 2px solid var(--accent-color);
  padding-bottom: var(--spacing-xs);
  margin-bottom: var(--spacing-md);
}

.ingredients-list {
  list-style: none;
  padding: 0;
}

.ingredient-item {
  font-size: 1.1em;
  padding: var(--spacing-xxs) 0;
  border-bottom: 1px solid #eee;
  color: var(--text-color);
}

.instructions {
  font-size: 1.1em;
  line-height: 1.8;
  color: var(--text-color);
}

/************************************
 * Responsive Design
 ************************************/
@media (max-width: 768px) {
  .recipe-title {
    font-size: 2em;
  }

  .section-title {
    font-size: 1.5em;
  }

  .recipe-info {
    font-size: 0.9em;
  }
}

@media (max-width: 480px) {
  .recipe-title {
    font-size: 1.8em;
  }

  .section-title {
    font-size: 1.3em;
  }
}

@media (min-width: 1440px) {
  .recipe-page {
    max-width: 80%;
  }
}
</style>
