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
    } catch (error) {
        console.error('Error fetching recipes by category:', error);
    } finally {
        loading.value = false;
    }
});

</script>


<template>
    <div>
        <h1>Recipes for {{ category }}</h1>
        <div v-if="loading">Loading...</div>
        <div v-else-if="recipes.length === 0">No recipes found.</div>
        <ul class="recipe-list">
            <RecipeCard 
                v-for="recipe in recipes"
                :key="recipe.id"
                :recipe="recipe"
            />
        </ul>
    </div>
</template>

<style scoped>
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