/**
 * URL de base pour l'API Spoonacular.
 * @constant {string}
 */
const SPOONACULAR_BASE_URL = 'https://api.spoonacular.com';

/**
 * Récupère des recettes depuis l'API Spoonacular en fonction d'une requête.
 * 
 * @async
 * @function fetchRecipes
 * @param {string} query - La requête de recherche pour les recettes (ex : "pizza").
 * @param {Object} runtimeConfig - Configuration d'exécution contenant les informations publiques.
 * @param {Object} runtimeConfig.public - Objet contenant les clés publiques.
 * @param {string} runtimeConfig.public.spoonacularApiKey - Clé API pour accéder à l'API Spoonacular.
 * @throws {Error} Lance une erreur si la requête est manquante ou si la clé API n'est pas fournie.
 * @returns {Promise<Object[]>} Retourne une promesse qui se résout en un tableau d'objets représentant les recettes.
 * @example
 * runtimeConfig = {
 *   public: {
 *     spoonacularApiKey: process.env.SPOONACULAR_API_KEY,
 *   },
 * };
 * 
 * const recettes = await fetchRecipes("pizza", runtimeConfig);
 * console.log(recettes);
 */
export const fetchRecipes = async (query, runtimeConfig) => {
  if (!query) {
    throw new Error('Query is required to fetch recipes');
  }

  const apiKey = runtimeConfig.public.spoonacularApiKey;
  if (!apiKey) {
    throw new Error('API Key is missing in runtimeConfig');
  }

  try {
    const { data } = await useFetch(`${SPOONACULAR_BASE_URL}/recipes/complexSearch`, {
      query: {
        apiKey,
        query,
        number: 52, // Nombre de résultats à récupérer
        addRecipeInformation: true, // Inclure des détails supplémentaires sur les recettes
        fillIngredients: true,      // Inclure des informations détaillées sur les ingrédients
      },
    });

    return data.value.results;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    throw new Error('Failed to fetch recipes');
  }
};


/**
 * Nettoie le résumé d'une recette en supprimant les balises HTML et les textes indésirables.
 *
 * @function cleanSummary
 * @param {string} summary - Résumé brut contenant des balises HTML ou du texte indésirable.
 * @returns {string} Résumé nettoyé sans balises HTML ni mentions inutiles.
 */
const cleanSummary = (summary) => {
  if (!summary) return '';

  return summary
    .replace(/<a[^>]*>(.*?)<\/a>/g, '$1') // Supprime les liens tout en gardant le texte
    .replace(/<\/?[^>]+(>|$)/g, '')       // Supprime toutes les balises HTML
};

/**
 * Récupère les détails d'une recette spécifique depuis l'API Spoonacular.
 *
 * @async
 * @function fetchRecipeDetails
 * @param {number} recipeId - L'identifiant unique de la recette.
 * @param {Object} runtimeConfig - Configuration d'exécution contenant les informations publiques.
 * @param {Object} runtimeConfig.public - Objet contenant les clés publiques.
 * @param {string} runtimeConfig.public.spoonacularApiKey - Clé API pour accéder à l'API Spoonacular.
 * @throws {Error} Lance une erreur si l'identifiant de la recette ou la clé API est manquant.
 * @returns {Promise<Object>} Retourne une promesse qui se résout en un objet contenant les détails de la recette.
 */
export const fetchRecipeDetails = async (recipeId, runtimeConfig) => {
  if (!recipeId) {
    throw new Error('Recipe ID is required to fetch recipe details');
  }

  const apiKey = runtimeConfig.public.spoonacularApiKey;
  if (!apiKey) {
    throw new Error('API Key is missing in runtimeConfig');
  }

  try {
    const { data } = await useFetch(`${SPOONACULAR_BASE_URL}/recipes/${recipeId}/information`, {
      query: {
        apiKey,
      },
    });

    // Nettoyer le résumé avant de retourner les données
    if (data.value.summary) {
      data.value.summary = cleanSummary(data.value.summary);
    }

    return data.value;
  } catch (error) {
    console.error('Error fetching recipe details:', error);
    throw new Error('Failed to fetch recipe details');
  }
};

/**
 * Récupère une liste de recettes par catégorie (ex: "salade") à partir de l'API Spoonacular.
 *
 * @async
 * @function fetchRecipesByCategory
 * @param {string} category - La catégorie pour filtrer les recettes (par exemple, "salade").
 * @param {Object} runtimeConfig - La configuration d'exécution contenant des informations publiques.
 * @returns {Promise<Object[]>} Une promesse qui se résout en un tableau d'objets de recettes.
 */
export const fetchRecipesByCategory = async (category, runtimeConfig) => {
  const apiKey = runtimeConfig.public.spoonacularApiKey;

  if (!apiKey) {
    throw new Error('API Key is missing in runtimeConfig');
  }

  if (!category) {
    throw new Error('Category is required to fetch recipes');
  }

  try {
    const { data } = await useFetch(`${SPOONACULAR_BASE_URL}/recipes/complexSearch`, {
      query: {
        apiKey,
        type: category,
        number: 52,
        addRecipeInformation: true, // Inclure les informations détaillées de la recette
        fillIngredients: true,      // Inclure des informations détaillées sur les ingrédients
      },
    });

    return data.value.results;
  } catch (error) {
    console.error(`Error fetching recipes for category "${category}":`, error);
    throw new Error('Failed to fetch recipes by category');
  }
};
