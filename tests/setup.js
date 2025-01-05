import { config } from 'dotenv';
config(); // Charge les variables d'environnement à partir de .env.test

global.__TEST_GLOBAL__ = 'test-value';
