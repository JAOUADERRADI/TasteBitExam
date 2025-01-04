<script setup>
import { fetchRecipesByCategory } from '@/services/api/recipes';
import { ref, onMounted } from 'vue';

// Références réactives pour stocker les recettes
const saladRecipes = ref([]);
const cakeRecipes = ref([]);

// Charger les recettes des catégories au montage
onMounted(async () => {
  try {
    const runtimeConfig = useRuntimeConfig(); // Récupérer la configuration d'exécution (clé API, etc.)
    
    // Charger les recettes pour les deux catégories
    saladRecipes.value = await fetchRecipesByCategory('salad', runtimeConfig);
    cakeRecipes.value = await fetchRecipesByCategory('dessert', runtimeConfig);
  } catch (error) {
    console.error('Error loading recipes:', error);
  }
});
</script>

<template>
  <HomeHero />
  
  <!-- Section for Salads -->
  <div class="category-section">
    <h2>Salads</h2>
    <ul class="recipe-list">
      <RecipeCard
        v-for="recipe in saladRecipes"
        :key="recipe.id"
        :recipe="recipe"
      />
    </ul>
  </div>

  <!-- Section for Cakes -->
  <div class="category-section">
    <h2>Dessert</h2>
    <ul class="recipe-list">
      <RecipeCard
        v-for="recipe in cakeRecipes"
        :key="recipe.id"
        :recipe="recipe"
      />
    </ul>
  </div>
</template>

<style>
.category-section {
  max-width: 70%;
  margin: auto;
  margin-top: 40px;
}

.category-section h2 {
  margin-bottom: 20px;
}

.recipe-list {
  display: grid;
  gap: 20px;
}

@media (min-width: 1024px) {
  .recipe-list {
    grid-template-columns: repeat(4, 1fr);
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
