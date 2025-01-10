import { ref } from "vue";
import { useSupabaseClient, useSupabaseUser } from "#build/imports";

/**
 * Gestion des likes pour les recettes.
 * Fournit des fonctionnalités pour récupérer, ajouter et retirer des likes sur les recettes.
 *
 * @returns {Object} Méthodes et propriétés pour gérer les likes :
 * - `likedRecipes` : Objet réactif contenant l'état des likes.
 * - `fetchUserLikes` : Fonction pour récupérer les likes d'un utilisateur.
 * - `toggleLike` : Fonction pour ajouter ou retirer un like.
 */
export const userLikes = () => {
  const client = useSupabaseClient();
  const user = useSupabaseUser();

  /**
   * Objet réactif centralisé pour suivre les likes de l'utilisateur.
   * @type {Object}
   * @property {boolean} [recipeId] - `true` si la recette est likée, `false` sinon.
   */
  const likedRecipes = ref({});

  /**
   * Récupère les recettes likées par l'utilisateur connecté depuis la base de données Supabase.
   *
   * @async
   * @function fetchUserLikes
   * @throws {Error} Si une erreur survient lors de la récupération des données.
   * @returns {Promise<void>} Aucune valeur de retour explicite.
   */
  const fetchUserLikes = async () => {
    if (!user.value) return;

    const { data, error } = await client
      .from("likes")
      .select("recipe_id")
      .eq("user_id", user.value.id);

    if (error) {
      console.error(
        "Error fetching likes:",
        error.message
      );
      return;
    }

    // Met à jour les recettes likées
    likedRecipes.value = data.reduce((acc, like) => {
      acc[like.recipe_id] = true;
      return acc;
    }, {});
  };

  /**
   * Ajoute ou retire un like sur une recette pour l'utilisateur connecté.
   *
   * @async
   * @function toggleLike
   * @param {number|string} recipeId - L'identifiant unique de la recette.
   * @throws {Error} Si une erreur survient lors de l'ajout ou de la suppression du like.
   * @returns {Promise<void>} Aucune valeur de retour explicite.
   */
  const toggleLike = async (recipeId) => {
    if (!user.value) {
      alert("You must be logged in to like a recipe.");
      return;
    }

    if (likedRecipes.value[recipeId]) {
      // Supprimer le like
      const { error } = await client
        .from("likes")
        .delete()
        .eq("user_id", user.value.id)
        .eq("recipe_id", recipeId);

      if (error) {
        console.error("Error removing like:", error.message);
      } else {
        likedRecipes.value[recipeId] = false;
      }
    } else {
      // Ajouter un like
      const { error } = await client
        .from("likes")
        .insert([{ user_id: user.value.id, recipe_id: recipeId }]);

      if (error) {
        console.error("Error adding like:", error.message);
      } else {
        likedRecipes.value[recipeId] = true;
      }
    }
  };

  return {
    likedRecipes,
    fetchUserLikes,
    toggleLike,
  };
};
