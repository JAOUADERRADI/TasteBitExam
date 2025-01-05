// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  future: {
    compatibilityVersion: 4,
  },

  // Fonctionnalités expérimentales activées
  experimental: {
    scanPageMeta: 'after-resolve',    // Optimisation des métadonnées après résolution des pages
    sharedPrerenderData: false,       // Désactiver le partage des données de pré-rendu
    compileTemplate: true,            // Activer la compilation des templates
    resetAsyncDataToUndefined: true,  // Réinitialiser les données async à undefined
    templateUtils: true,              // Activer les utilitaires de templates
    relativeWatchPaths: true,         // Utiliser des chemins relatifs pour la surveillance
    normalizeComponentNames: false,   // Ne pas normaliser les noms des composants
    defaults: {
      useAsyncData: {
        deep: true, // Appliquer les paramètres par défaut de manière profonde
      },
    },
  },

  devtools: { enabled: true },

  components: [
    '~/components',
    '~/components/global',
    '~/components/ui',
    '~/components/specific/home',
  ],

  modules: ['@nuxt/image', '@nuxtjs/supabase', '@nuxt/icon', '@nuxt/test-utils/module'],

  supabase: {
    redirect: false,
  },

  runtimeConfig: {
    public: {
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseApiKey: process.env.SUPABASE_KEY,
    },
  },
})