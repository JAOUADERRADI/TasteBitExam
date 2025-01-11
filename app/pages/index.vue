<script setup>
import { fetchRecipesByCategory } from '@/services/api/recipes';

definePageMeta({
  title: 'Tastebit | Discover Recipes, Ideas, and Inspiration for Every Meal',
  meta: [
    {
      name: 'description',
      content: 'Explore a wide range of curated content, resources, and ideas to help you elevate your daily experiences. Perfect for every taste and occasion!',
    },
    {
      name: 'keywords',
      content: 'recipes, inspiration, ideas, tips, guides, food, lifestyle',
    },
    {
      property: 'og:title',
      content: 'Tastebit | Your Ultimate Resource for Inspiration and Ideas',
    },
    {
      property: 'og:description',
      content: 'Find expert tips, guides, and curated content to enhance your lifestyle and daily experiences.',
    },
    {
      property: 'og:image',
      content: 'https://www.tastebit.comi/mages/logo.jpg',
    },
    {
      property: 'og:url',
      content: 'https://www.tastebit.com',
    },
  ],
});

// Références réactives pour stocker les recettes
const saladRecipes = ref([]);
const cakeRecipes = ref([]);
const loading = ref(true);
const errorMessage = ref(null);

// Charger les recettes des catégories au montage
onMounted(async () => {
  try {
    const runtimeConfig = useRuntimeConfig(); // Récupérer la configuration d'exécution (clé API, etc.)
    loading.value = true;
    // Charger les recettes pour les deux catégories
    saladRecipes.value = await fetchRecipesByCategory('salad', runtimeConfig);
    cakeRecipes.value = await fetchRecipesByCategory('dessert', runtimeConfig);
  } catch (error) {
    // console.error('Error loading recipes:', error);
    errorMessage.value = 'An error occurred while loading the recipes.';
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <HomeHero />
  <LoadingSpinner v-if="loading" text="Loading recipes..." />
  <div v-else-if="errorMessage" class="error">
      {{ errorMessage }}
  </div>
  <div v-else>
    <!-- Section for Salads -->
    <div class="category-section" aria-label="Section listing salad recipes">
      <h2>Salads</h2>
      <ul class="recipe-list" aria-label="List of salad recipes">
        <RecipeCard v-for="recipe in saladRecipes.slice(0, 4)" :key="recipe.id" :recipe="recipe" />
      </ul>
    </div>
    <!-- Section for Cakes -->
    <div class="category-section" aria-label="Section listing dessert recipes">
      <h2>Dessert</h2>
      <ul class="recipe-list" aria-label="List of dessert recipes">
        <RecipeCard v-for="recipe in cakeRecipes.slice(0, 4)" :key="recipe.id" :recipe="recipe" />
      </ul>
    </div>
  </div>
</template>

<style scoped>
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

.error {
  text-align: center;
  color: red;
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
