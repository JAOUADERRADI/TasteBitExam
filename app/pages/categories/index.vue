<script setup>
import { CATEGORIES } from '@/services/categories';

const categories = CATEGORIES;
</script>


<template>
    <div>
      <h1>Categories</h1>
      <ul>
        <li v-for="category in categories" :key="category">
          <NuxtLink :to="`/categories/${category}`">
            {{ category }}
          </NuxtLink>
        </li>
      </ul>
    </div>
</template>
