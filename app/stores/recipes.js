import { defineStore } from 'pinia';
import { fetchRecipes } from '@/services/api/recipes';

/**
 * Store Pinia pour la gestion des recettes.
 * Ce store permet de gérer un cache local des résultats de recherche
 * et d'effectuer des requêtes vers une API de recettes.
 */
export const useRecipesStore = defineStore('recipes', {
  /**
   * État du store.
   * Contient un cache des résultats des recherches ainsi que les résultats actuels.
   */
  state: () => ({
    /**
     * Cache des résultats des recherches.
     * Les clés sont les requêtes de recherche et les valeurs sont les tableaux de recettes correspondants.
     * Le cache est initialisé à partir du localStorage si disponible.
     * @type {Object<string, Object[]>}
     */
    cache: typeof window !== 'undefined' && localStorage.getItem('recipesCache')
      ? JSON.parse(localStorage.getItem('recipesCache'))
      : {},

    /**
     * Résultats actuels de la recherche.
     * Les résultats sont également initialisés à partir du localStorage si disponibles.
     * @type {Object[]}
     */
    currentResults: typeof window !== 'undefined' && localStorage.getItem('currentResults')
      ? JSON.parse(localStorage.getItem('currentResults'))
      : [],
  }),

  /**
   * Actions du store.
   * Les actions permettent de manipuler les données et d'interagir avec les API externes.
   */
  actions: {
    /**
     * Sauvegarde l'état actuel du cache et des résultats dans le localStorage.
     * Cette méthode est appelée après chaque mise à jour des données.
     * @function saveToLocalStorage
     */
    saveToLocalStorage() {
      if (typeof window !== 'undefined') {
        localStorage.setItem('recipesCache', JSON.stringify(this.cache));
        localStorage.setItem('currentResults', JSON.stringify(this.currentResults));
      }
    },

    /**
     * Récupère des recettes en fonction d'une requête donnée.
     * Si les résultats pour cette requête sont déjà dans le cache, ils sont renvoyés directement.
     * Sinon, une requête est effectuée via le service `fetchRecipes`.
     * 
     * @async
     * @function fetchRecipes
     * @param {string} query - La requête de recherche pour les recettes.
     * @param {Object} runtimeConfig - Configuration d'exécution contenant des paramètres publics.
     * @param {Object} runtimeConfig.public - Contient les paramètres publics.
     * @param {string} runtimeConfig.public.spoonacularApiKey - Clé API pour l'accès à l'API Spoonacular.
     * @returns {Promise<Object[]>} Promesse résolue avec un tableau de recettes.
     * @throws {Error} Lève une erreur si la requête API échoue.
     */
    async fetchRecipes(query, runtimeConfig) {
      // Vérifie si les résultats pour cette requête sont déjà en cache
      if (this.cache[query]) {
        console.log(`Résultats en cache pour la requête : "${query}"`);
        this.currentResults = this.cache[query];
        this.saveToLocalStorage(); // Mise à jour du localStorage
        return this.cache[query];
      }

      try {
        // Appelle le service pour récupérer les recettes
        const results = await fetchRecipes(query, runtimeConfig);
        this.cache[query] = results;   // Mise en cache des résultats
        this.currentResults = results; // Mise à jour des résultats actuels
        this.saveToLocalStorage();     // Sauvegarde dans le localStorage
        return results;
      } catch (error) {
        // Gestion des erreurs
        console.error('Erreur lors de la récupération des recettes :', error);
        throw error;
      }
    },
  },
});
