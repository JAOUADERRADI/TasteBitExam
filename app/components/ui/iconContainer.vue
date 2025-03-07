<script setup>
const mode = useColorMode();
const user = useSupabaseUser();
const isAuthenticated = ref(!!user.value);

const props = defineProps({
  isDropdownOpen: Boolean,
});
const emit = defineEmits(['toggleDropdown', 'closeDropdown']);

const toggleDarkMode = () => {
  mode.value = mode.value === 'dark' ? 'light' : 'dark';
};

watch(user, (newValue) => {
  isAuthenticated.value = !!newValue;
});
</script>

<template>
  <div class="container-icon">
    <button @click="toggleDarkMode" class="mode-toggle">
      <Icon :name="mode === 'dark' ? 'fa-solid:sun' : 'fa-solid:moon'" />
    </button>
    <div v-if="!isAuthenticated" class="auth">
      <NuxtLink to="/auth/login" class="login-button">Login</NuxtLink>
    </div>
    <div v-else class="profile">
      <button class="profile-button" @click="$emit('toggleDropdown')">
        <Icon name="fa-solid:user" />
      </button>
    </div>
  </div>
</template>