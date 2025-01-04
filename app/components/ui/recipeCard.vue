<script setup>
// Props pour recevoir les informations de la recette
const props = defineProps({
  recipe: {
    type: Object,
    required: true,
  },
});

const router = useRouter();

// Méthode pour rediriger vers la page de détail de la recette
const goToRecipePage = () => {
  router.push(`/recipes/${props.recipe.id}`);
};
</script>

<template>
  <li class="recipe-card" @click="goToRecipePage">
    <div class="recipe-zoom-image">
      <img :src="recipe.image" :alt="recipe.title" class="recipe-image" />
    </div>
    <div class="recipe-details">
      <h2>{{ recipe.title }}</h2>
      <!-- <p><strong>Temps de préparation:</strong> {{ recipe.readyInMinutes }} mins</p>
        <p>
          <strong>Calories:</strong>
          {{ recipe.nutrition?.nutrients.find(n => n.name === 'Calories')?.amount || 'N/A' }} kcal
        </p> -->
    </div>
  </li>
</template>

<style scoped>
.recipe-card {
  max-height: 361px;
  max-width: 100%;
  border: 1px solid var(--border-color);
  border-radius: var(--spacing-xs);
  list-style: none;
  cursor: pointer;
  overflow: hidden;
}

.recipe-zoom-image {
  max-height: 293px;
  overflow: hidden;
}

.recipe-image {
  width: 100%;
  object-fit: cover;
  transition: all .1s;
}

.recipe-card:hover {
  color: var(--accent-color);
}

.recipe-card:hover .recipe-image {
  transform: scale(1.1);
}

.recipe-details {
  padding: var(--spacing-xs);
}

/* Tablet */
@media (min-width: 768px) {
  ul {
    grid-template-columns: repeat(2, 1fr);
  }

  .recipe-card {
    max-width: 323px;
    max-height: 332px;
  }

  .recipe-zoom-image {
    max-height: 264px;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  ul {
    grid-template-columns: repeat(4, 1fr);
  }

  .recipe-card {
    max-width: 320px;
    max-height: 361px;
  }
}

@media (max-width: 320px) {
  .recipe-card {
    max-width: 288px;
    max-height: 361px;
  }

  .recipe-details {
    font-size: 14px;
  }
}
</style>
