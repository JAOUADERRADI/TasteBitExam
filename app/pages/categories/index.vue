<script setup>
import { CATEGORIES } from '@/services/categories';

const categories = CATEGORIES;

useHead({
  title: 'Categories | Explore All',
  meta: [
    {
      name: 'description',
      content: 'Explore a wide range of categories and discover related content tailored to your interests.',
    },
    {
      property: 'og:title',
      content: 'Categories | Explore All',
    },
    {
      property: 'og:description',
      content: 'Browse our diverse categories to find content that inspires and guides you.',
    },
    {
      property: 'og:image',
      content: 'https://www.tastebit.com/images/categories.jpg',
    },
    {
      property: 'og:url',
      content: 'https://www.tastebit.com/categories',
    }
  ],
});
</script>

<template>
  <div class="categories-container" aria-label="Categories Page">
    <h1>Categories</h1>
    <div class="categories-grid" aria-label="List of categories">
      <NuxtLink 
        v-for="category in categories" 
        :key="category.name" 
        :to="`/categories/${category.name}`"
        class="category-item"
        :aria-label="`View recipes in the ${category.name} category`"
      >
        <div class="category-image">
          <NuxtImg :src="category.image" :alt="category.name" loading="lazy"/>
        </div>
        <span>{{ category.name }}</span>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.categories-grid {
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  justify-items: center;
}

.category-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  text-decoration: none;
  text-transform: capitalize;
  color: var(--text-color);
  transition: all .1s;
}

.category-image {
  width: 150px;
  height: 150px;
  overflow: hidden;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
}

.category-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.category-item:hover {
  color: var(--accent-color);
}

.category-item:hover img {
  transform: scale(1.1);
}

/* Tablet layout */
@media (min-width: 768px) {
  .categories-container {
    width: 80%;
    margin: auto;
  }
  .categories-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Desktop layout */
@media (min-width: 1024px) {
  .categories-grid {
    grid-template-columns: repeat(6, 1fr);
  }
}
</style>
