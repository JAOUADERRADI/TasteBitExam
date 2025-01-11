<script setup>
defineProps({
  type: {
    type: String,
    default: 'button',
  },
  ariaLabel: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <button :type="type" :aria-label="ariaLabel" class="button">
    <slot />
  </button>
</template>
<style scoped>
.button {
  padding: var(--spacing-xs) var(--spacing-md);
  background-color: var(--accent-color);
  color: white;
  border: none;
  border-radius: var(--spacing-xs);
  cursor: pointer;
  text-decoration: none;
  transition: all .3s ease;
  font-weight: bold;
}

.button:hover {
  color: var(--text-color);
  background-color: var(--bg-accent-color);
}</style>