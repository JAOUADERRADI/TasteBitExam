<script setup>
import { useAuthService } from '@/services/api/auth';

const props = defineProps({
  isMenuOpen: Boolean,
});

const { handleLogout } = useAuthService();
const user = useSupabaseUser();
const emit = defineEmits(['toggleMenu']);

const isAuthenticated = ref(!!user.value);
watch(
  () => user.value,
  (newValue) => {
    isAuthenticated.value = !!newValue;
  }
);
</script>

<template>
  <nav class="nav">
    <ul :class="{ active: isMenuOpen }">
      <li>
        <NuxtLink to="/" exact-active-class="active" class="link" @click="$emit('toggleMenu')">
          Home
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/search" exact-active-class="active" class="link" @click="$emit('toggleMenu')">
          Recipes
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/categories" exact-active-class="active" class="link" @click="$emit('toggleMenu')">
          Categories
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about" exact-active-class="active" class="link" @click="$emit('toggleMenu')">
          About</NuxtLink>
      </li>
      <li v-if="!isAuthenticated">
        <NuxtLink to="/auth/login" exact-active-class="active" class="link mobile" @click="$emit('toggleMenu')">
          Login
        </NuxtLink>
      </li>
      <li v-else>
        <NuxtLink to="/profile" exact-active-class="active" class="link mobile" @click="$emit('toggleMenu')">
          Profile
        </NuxtLink>
      </li>
      <li v-if="isAuthenticated">
        <NuxtLink @click="handleLogout" exact-active-class="active" class="link mobile">
          Logout
        </NuxtLink>
      </li>
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