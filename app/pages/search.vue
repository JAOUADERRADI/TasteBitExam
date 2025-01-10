<script setup>
import { useRecipesStore } from '~/stores/recipes';

const recipesStore = useRecipesStore();

useHead({
  title: 'Recherche de Recettes | TasteBit',
  meta: [
    {
      name: 'description',
      content: 'Recherchez des recettes délicieuses et inspirantes sur Taste Bit. Découvrez des plats qui conviennent à toutes les occasions.',
    },
    {
      name: 'keywords',
      content: 'recettes, recherche de recettes, cuisine, plats délicieux, Taste Bit',
    },
  ],
});
</script>

<template>
  <section class="search-page"  aria-label="Search for Recipes">
    <h1>Recherche de Recettes</h1>
    <SearchForm />

    <div v-if="recipesStore.currentResults.length" class="results" aria-label="List of recipes matching your search">
      <ul>
        <RecipeCard
          v-for="recipe in recipesStore.currentResults"
          :key="recipe.id"
          :recipe="recipe"
          aria-label="Recipe card for {{ recipe.title }}"
        />
      </ul>
    </div>

    <div v-if="!recipesStore.currentResults.length && !loading && !error" aria-label="No recipes found message">
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
