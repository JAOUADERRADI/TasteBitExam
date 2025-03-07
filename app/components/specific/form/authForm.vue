<script setup>
import { useAuthService } from '@/services/api/auth';

const { email, password, errorMsg, handleSignIn } = useAuthService();
</script>


<template>
  <form @submit.prevent="handleSignIn">
    <FormHeader 
      title="Welcome Back !"
      subtitle="Don't have an account?" 
      link="/auth/register" 
      linkText="Sign Up"
    />
    <InputField 
      id="email"
      label="Email:" 
      v-model="email" 
      type="email" 
      required placeholder="Enter your email"
    />
    <InputField 
      id="password" 
      label="Password:" 
      v-model="password" 
      type="password"
      required placeholder="Enter your password" />
    <button type="submit" class="sign-btn">Sign In</button>
    <p v-if="errorMsg" class="error">{{ errorMsg }}</p>
    <p class="text">
      Forgotten your password or your login details?
      <a href="#">Get help</a> signing in
    </p>
  </form>
</template>


<style scoped>
form {
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 1.5rem;
}

.sign-btn {
  display: inline-block;
  width: 100%;
  height: auto;
  padding: 0.8rem;
  background-color: var(--accent-color);
  color: var(--bg-color);
  border: none;
  cursor: pointer;
  border-radius: 0.8rem;
  font-size: 0.95rem;
  transition: 0.3s;
}

.sign-btn:hover {
  color: var(--text-color);
  background-color: var(--bg-accent-color);
}

.error {
  color: #e63946;
  margin-top: 1rem;
}

.text {
  font-size: 0.85rem;
  color: #777;
}

.text a {
  text-decoration: none;
  color: var(--accent-color);
}

.text a:hover {
  text-decoration: underline;
}
</style>