<script setup>
</script>

<template>
    <Header />
    <main>
        <slot />
    </main>
    <Footer />
</template>

<style scoped>
main {
    min-height: 100vh;
    margin-top: 60px;
}
</style>