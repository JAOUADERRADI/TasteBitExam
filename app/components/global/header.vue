<script setup>
const isMenuOpen = ref(false);
const isDropdownOpen = ref(false);
</script>

<template>
  <header class="header">
    <div class="header-container">
      <Logo />
      <NavMenu :isMenuOpen="isMenuOpen" @toggleMenu="isMenuOpen = !isMenuOpen" />
      <IconContainer
        :isDropdownOpen="isDropdownOpen"
        @toggleDropdown="isDropdownOpen = !isDropdownOpen"
        @closeDropdown="isDropdownOpen = false"
      />
    </div>
    <dropDownMenu v-if="isDropdownOpen" @closeDropdown="isDropdownOpen = false" />
  </header>
</template>