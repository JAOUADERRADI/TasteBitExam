<script setup>
import { fetchRecipesByCategory } from '@/services/api/recipes';
import RecipeCard from '~/components/ui/recipeCard.vue';

const route = useRoute();
const category = route.params.category;

const recipes = ref([]);
const loading = ref(true);

onMounted(async () => {
  try {
    const runtimeConfig = useRuntimeConfig();
    // console.log('Fetching recipes for category:', category);
    recipes.value = await fetchRecipesByCategory(category, runtimeConfig);
    // console.log('Fetched recipes:', recipes.value);

    useHead({
      title: `Recipes for ${category} | TasteBit`,
      meta: [
        {
          name: 'description',
          content: `Discover delicious recipes in the ${category} category. Explore a wide variety of dishes tailored to your taste.`,
        },
        {
          property: 'og:title',
          content: `Recipes for ${category}`,
        },
        {
          property: 'og:description',
          content: `Discover delicious recipes in the ${category} category. Explore a wide variety of dishes tailored to your taste.`,
        },
        {
          property: 'og:image',
          content: 'https://www.tastebit.com/images/recipe-banner.jpg',
        },
        {
          property: 'og:url',
          content: `https://www.tastebit.com/categories/${category}`,
        },
      ],
    });
  } catch (error) {
    console.error('Error fetching recipes by category:', error);
  } finally {
    loading.value = false;
  }
});

</script>

<template>
  <section class="category-page" aria-label="Category Recipes Page">
    <h1>Recipes for {{ category }}</h1>
    <div v-if="loading">Loading...</div>
    <div v-else-if="recipes.length === 0">No recipes found.</div>
    <ul class="recipe-list" aria-label="List of recipes for {{ category }}">
      <RecipeCard v-for="recipe in recipes" :key="recipe.id" :recipe="recipe" aria-label="Recipe card for {{ recipe.title }}"/>
    </ul>
  </section>
</template>

<style scoped>
.category-page {
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