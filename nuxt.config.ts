import { config } from 'dotenv';
config({ path: '.env' });
config({ path: '.env.local', override: true });

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

  css: ['@/assets/css/global.css'],

  devtools: { enabled: true },

  components: [
    '~/components',
    '~/components/global',
    '~/components/ui',
    '~/components/specific/home',
    '~/components/specific/form',
  ],

  modules: ['@nuxt/image', '@nuxtjs/supabase', '@nuxt/icon', '@vueuse/nuxt', '@pinia/nuxt', '@nuxt/test-utils/module'],

  // Configuration de Supabase
  supabase: {
    redirect: false,
  },

  runtimeConfig: {
    public: {
      spoonacularApiKey: process.env.SPOONACULAR_API_KEY,
    },
  },


  image: {
    screens: {
      sm: 320,
      md: 640,
      lg: 1024,
      xl: 1280,
    },
  },
})