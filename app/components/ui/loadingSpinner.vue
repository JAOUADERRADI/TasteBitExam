<template>
    <div class="loading-spinner" aria-live="polite" aria-busy="true">
      <div class="spinner"></div>
      <span class="loading-text" v-if="text">{{ text }}</span>
    </div>
  </template>
  
  <script setup>
  defineProps({
    text: {
      type: String,
      default: '',
    },
  });
  </script>
  
  <style scoped>
  .loading-spinner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }
  
  .spinner {
    width: 40px;
    height: 40px;
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-top: 4px solid var(--primary-color, var(--accent-color));
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
  
  .loading-text {
    margin-top: 10px;
    font-size: 1rem;
    color: var(--text-color, #666);
  }
  
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
  </style>
  