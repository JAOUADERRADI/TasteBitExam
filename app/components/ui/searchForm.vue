<script setup>
import { useRecipesStore } from '~/stores/recipes';

const query = ref('');
const loading = ref(false);
const error = ref(null);

const router = useRouter();
const recipesStore = useRecipesStore();
const runtimeConfig = useRuntimeConfig();

const searchRecipes = async () => {
  if (!query.value) {
    error.value = 'Veuillez entrer une requête de recherche.';
    return;
  }

  router.push({ name: 'search', query: { q: query.value } });

  loading.value = true;
  error.value = null;

  try {
    await recipesStore.fetchRecipes(query.value, runtimeConfig);
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <form @submit.prevent="searchRecipes" class="search-form">
    <input
      type="text"
      v-model="query"
      placeholder="Search recipes ..."
      class="search-input"
    />
    <button type="submit" class="search-button" :disabled="loading">
      {{ loading ? "Searching..." : "Search" }}
    </button>
    <!-- <div v-if="error" class="error">{{ error }}</div> -->
  </form>
</template>

<style scoped>
.search-form {
  display: flex;
  gap: var(--spacing-xs);
  margin-bottom: var(--spacing-md);
}

.search-input {
  flex: 1;
  padding: var(--spacing-xs);
  border: 1px solid var(--accent-color);
  border-radius: var(--spacing-xs);
  background-color: var(--bg-color);
  color: var(--text-color);
}

.search-button {
  padding: var(--spacing-xs) var(--spacing-sm);
  background-color: var(--accent-color);
  color: white;
  border: none;
  border-radius: var(--spacing-xs);
  cursor: pointer;
}

.error {
  color: red;
  margin-top: var(--spacing-sm);
}

@media (max-width: 768px) {
  .search-input {
    padding: var(--spacing-sm);
  }
}
</style>
