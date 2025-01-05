import { defineVitestConfig } from '@nuxt/test-utils/config';

export default defineVitestConfig({
  test: {
    // Activer le support pour les tests de composants Vue
    globals: true, // Utilisation des globales de test (ex: `describe`, `it`)
    environment: 'jsdom', // Simule un DOM pour les tests frontend
    include: ['**/*.test.js'], // Inclut tous les fichiers avec `.test.js`
    coverage: {
      provider: 'istanbul', // Fournisseur de couverture (c8 est performant)
      reporter: ['text', 'json', 'html'], // Types de rapports
      reportsDirectory: './coverage', // Répertoire pour les rapports
    },
    setupFiles: ['./tests/setup.js'], // Fichiers pour configurer l'environnement de test
  },
});
