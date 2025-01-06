<script setup>
import { useAuthService } from '@/services/api/auth';
const { handleLogout } = useAuthService();
const emit = defineEmits(['closeDropdown']);
</script>

<template>
  <ul class="dropdown" @click="$emit('closeDropdown')" >
    <li><NuxtLink to="/profile">Profile</NuxtLink></li>
    <li @click="handleLogout">Logout</li>
  </ul>
</template>
