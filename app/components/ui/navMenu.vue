<script setup>
import { useAuthService } from '@/services/api/auth';

const { handleLogout } = useAuthService();
const user = useSupabaseUser();
const isAuthenticated = ref(!!user.value);
const props = defineProps({
  isMenuOpen: Boolean,
});
const emit = defineEmits(['toggleMenu']);
</script>

<template>
  <nav class="nav">
    <ul :class="{ active: isMenuOpen }">
      <li><NuxtLink to="/" exact-active-class="active" class="link">Home</NuxtLink></li>
      <li><NuxtLink to="/search" exact-active-class="active" class="link">Recipes</NuxtLink></li>
      <li><NuxtLink to="/categories" exact-active-class="active" class="link">Categories</NuxtLink></li>
      <li><NuxtLink to="/about" exact-active-class="active" class="link">About</NuxtLink></li>
      <li v-if="!isAuthenticated"><NuxtLink to="/auth/login" exact-active-class="active" class="link mobile">Login</NuxtLink></li>
      <li v-else><NuxtLink to="/profile" exact-active-class="active" class="link mobile">Profile</NuxtLink></li>
      <li v-if="isAuthenticated"><NuxtLink @click="handleLogout" exact-active-class="active" class="link mobile">Logout</NuxtLink></li>
    </ul>
    <button @click="$emit('toggleMenu')" class="nav-toggle">
      <Icon :name="isMenuOpen ? 'fa-solid:times' : 'fa-solid:bars'" />
    </button>
  </nav>
</template>

<style scoped>
.mobile {
  display: none;
}

@media (max-width: 768px) {
  .mobile {
    display: inline;
  }
}
</style>