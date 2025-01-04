<script setup>
import { useRecipesStore } from '~/stores/recipes';

const recipesStore = useRecipesStore();
</script>

<template>
  <section class="search-page">
    <h1>Recherche de Recettes</h1>
    <SearchForm />

    <div v-if="recipesStore.currentResults.length" class="results">
      <ul>
        <RecipeCard
          v-for="recipe in recipesStore.currentResults"
          :key="recipe.id"
          :recipe="recipe"
        />
      </ul>
    </div>

    <div v-if="!recipesStore.currentResults.length && !loading && !error">
      <p>Aucune recette trouvée. Essayez une autre recherche.</p>
    </div>
  </section>
</template>

<style scoped>
.search-page {
  max-width: 70%;
  margin: auto;
  padding: var(--spacing-lg);
}

.results {
  margin-top: var(--spacing-lg);
}

ul {
  margin: auto;
  display: grid;
  gap: var(--spacing-md);
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}
</style>
