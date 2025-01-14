<script setup>
import { useAuthService } from '@/services/api/auth';
const { handleLogout } = useAuthService();
const emit = defineEmits(['closeDropdown']);
</script>

<template>
  <ul class="dropdown" @click="$emit('closeDropdown')" >
    <li><NuxtLink to="/profile">Profile</NuxtLink></li>
    <li><NuxtLink to="/profile/liked-recipe">Liked recipe</NuxtLink></li>
    <li @click="handleLogout" class="logout">Logout</li>
  </ul>
</template>

<style scoped>
ul li,
ul li a,
.logout {
  color: var(--text-color);
}
ul li a {
  text-decoration: none;
}

.logout:hover {
  color: var(--text-color);
  background: red;
}
</style>