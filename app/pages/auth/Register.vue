<template>
    <div>
      <h1>Register</h1>
      <form @submit.prevent="registerAccount">
        <div>
          <label for="email">Email:</label>
          <input id="email" v-model="email" type="email" placeholder="Enter your email" required />
        </div>
        <div>
          <label for="password">Password:</label>
          <input id="password" v-model="password" type="password" placeholder="Enter your password" required />
        </div>
        <div>
          <label for="confirm-password">Confirm Password:</label>
          <input
            id="confirm-password"
            v-model="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            required
          />
        </div>
        <button type="submit" :disabled="loading">Sign Up</button>
      </form>
  
      <p v-if="errorMsg" class="error">{{ errorMsg }}</p>
      <p v-if="successMsg" class="success">{{ successMsg }}</p>
    </div>
  </template>
  
  <script setup>
  import { useAuthService } from '~/services/api/auth';
  
  // Récupération des propriétés et méthodes du service d'authentification
  const {
    email,
    password,
    confirmPassword,
    errorMsg,
    successMsg,
    registerAccount,
    loading,
  } = useAuthService();
  </script>