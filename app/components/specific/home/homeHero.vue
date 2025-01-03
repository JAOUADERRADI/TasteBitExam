<script setup>

const query = ref('');
const loading = ref(false);
const router = useRouter();

const search = () => {
  if (query.value) {
    router.push({ name: 'search', query: { q: query.value } });
  }
};

</script>

<template>
  <section class="hero">
    <!-- Image Section -->
    <div class="hero-image">
      <img src="~/assets/images/hero.jpg" alt="Delicious Food" />
    </div>

    <!-- Content Section -->
    <div class="hero-content">
      <h1>Discover Your Next Favorite Recipe</h1>
      <p>Explore a world of delicious flavors and culinary inspiration.</p>
      <form @submit.prevent="search" class="search-form">
        <input type="text" v-model="query" placeholder="Search for a recipe..." aria-label="Search for a recipe"
          class="search-input" />
        <!-- <button type="submit" class="search-button">Search</button> -->
        <button type="submit" class="search-button" :disabled="loading">
          {{ loading ? "Searching..." : "Search" }}
        </button>
      </form>
    </div>
  </section>
</template>

<style scoped>
.hero {
  max-width: 80%;
  max-height: 600px;
  margin: auto;
  display: flex;
  align-items: center;
  background: var(--bg-accent-color);
  color: var(--text-color);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: var(--spacing-xs);
  overflow: hidden;
}

.hero-image {
  max-width: 50%;
}

.hero-image img {
  max-width: 100%;
  height: auto;
  border-radius: var(--spacing-xs) 0 0 var(--spacing-xs);
}

.hero-content {
  max-width: 100%;
  display: flex;
  flex-direction: column;
  padding: var(--spacing-lg);
  gap: var(--spacing-sm);
}

.hero-content h1 {
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0;
}

.hero-content p {
  font-size: 1.25rem;
  margin: 0;
  color: var(--text-color);
}

.search-form {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  margin-top: var(--spacing-sm);
}

.search-input {
  flex: 1;
  padding: var(--spacing-xs) var(--spacing-sm);
  border: 1px solid var(--accent-color);
  border-radius: var(--spacing-xs);
  outline: none;
  font-size: 1rem;
  color: var(--text-color);
  background-color: var(--bg-color);
}

.search-input::placeholder {
  color: #aaa;
}

.search-button {
  padding: var(--spacing-xs) var(--spacing-md);
  background: var(--accent-color);
  color: #fff;
  border: none;
  border-radius: var(--spacing-xs);
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.3s;
}

.search-button:hover {
  background: #e56e12;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .hero {
    max-width: calc(100% - 32px);
    max-height: 800px;
    flex-direction: column;
    text-align: center;
  }

  .hero-image {
    max-width: 100%;
  }

  .hero-image img {
    max-width: 100%;
    border-radius: var(--spacing-xs) 0 0;
  }

}
</style>