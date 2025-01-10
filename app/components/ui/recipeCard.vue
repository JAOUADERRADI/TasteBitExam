<script setup>
import { userLikes } from '~/services/userLikeService';

/**
 * Props pour recevoir les informations de la recette
 * 
 * Propriétés définies pour le composant.
 * @property {Object} recipe - Objet contenant les informations de la recette. Ce champ est obligatoire.
 */
const props = defineProps({
  recipe: {
    type: Object,
    required: true,
  },
});

/**
 * Redirige l'utilisateur vers la page de détail de la recette sélectionnée.
 * @function goToRecipePage
 */
const router = useRouter();
const goToRecipePage = () => {
  router.push(`/recipes/${props.recipe.id}`);
};

/**
 * Importation des fonctionnalités de gestion des likes.
 * @property {Object} likedRecipes - Objet réactif contenant l'état des likes par ID de recette.
 * @property {Function} toggleLike - Fonction pour ajouter ou retirer un like sur une recette.
 * @property {Function} fetchUserLikes - Fonction pour récupérer les likes de l'utilisateur.
 */
const { likedRecipes, toggleLike, fetchUserLikes } = userLikes();

/**
 * Récupère les likes de l'utilisateur lorsque le composant est monté.
 * @function onMounted
 */
onMounted(() => {
  fetchUserLikes();
});
</script>

<template>
  <li class="recipe-card" @click="goToRecipePage">
    <div class="recipe-actions">
      <button
        class="like-button"
        @click.stop="toggleLike(props.recipe.id)"
        :class="{ liked: likedRecipes[props.recipe.id] }"
      >
        <Icon name="fa-solid:heart" />
      </button>
    </div>

    <div class="recipe-zoom-image">
      <NuxtImg :src="recipe.image" :alt="recipe.title" class="recipe-image" />
    </div>
    <div class="recipe-details">
      <h2>{{ recipe.title }}</h2>
    </div>
  </li>
</template>

<style scoped>
.recipe-card {
  position: relative;
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

.recipe-card:hover .like-button {
  transform: none;
}

.recipe-details {
  padding: var(--spacing-xs);
}

.recipe-actions {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 2;
}

.like-button {
  width: 40px;
  height: 40px;
  background: var(--bg-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: gray;
  cursor: pointer;
  border: none;
  transition: color 0.3s, border-color 0.3s, transform 0.2s;
}

.like-button.liked {
  color: var(--accent-color);
}
</style>
