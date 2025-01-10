<script setup>
defineProps({
    title: String,
    subtitle: String,
    link: String,
    linkText: String,
});
</script>

<template>
    <header class="heading">
        <h2>{{ title }}</h2>
        <h6>{{ subtitle }}</h6>
        <NuxtLink :to="link" class="link">{{ linkText }}</NuxtLink>
    </header>
</template>

<style scoped>
.heading h2 {
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: 8px;
    color: var(--text-color);
}

.heading h6 {
    color: #bababa;
    font-weight: 400;
    font-size: 0.9rem;
    display: inline;
    margin-right: 4px;
}
</style>