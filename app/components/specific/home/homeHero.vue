<script setup>

</script>

<template>
  <section class="hero">
    <!-- Image Section -->
    <div class="hero-image">
      <NuxtImg src="/images/hero.jpg" alt="Delicious Food" />
    </div>

    <!-- Content Section -->
    <div class="hero-content">
      <h1>Discover Your Next Favorite Recipe</h1>
      <p>Explore a world of delicious flavors and culinary inspiration.</p>
      <SearchForm />
    </div>
  </section>
</template>

<style scoped>
.hero {
  max-width: 80%;
  max-height: 400px;
  margin: 80px auto;
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

@media (min-width: 1440px) {
  .hero {
    max-height: 40vh;
  }

  .hero-content h1 {
    font-size: 3rem;
    font-weight: bold;
    margin: 0;
  }
}
</style>