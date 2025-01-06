<script setup>
const props = defineProps({
  isMenuOpen: Boolean,
});
const emit = defineEmits(['toggleMenu']);
</script>

<template>
  <nav class="nav">
    <ul :class="{ active: isMenuOpen }">
      <li><NuxtLink to="/" exact-active-class="active" class="link">Home</NuxtLink></li>
      <li><NuxtLink to="/about" exact-active-class="active" class="link">About</NuxtLink></li>
      <li><NuxtLink to="/recipes" exact-active-class="active" class="link">Recipes</NuxtLink></li>
      <li><NuxtLink to="/contact" exact-active-class="active" class="link">Contact</NuxtLink></li>
    </ul>
    <button @click="$emit('toggleMenu')" class="nav-toggle">
      <Icon :name="isMenuOpen ? 'fa-solid:bars' : 'fa-solid:bars'" />
    </button>
  </nav>
</template>