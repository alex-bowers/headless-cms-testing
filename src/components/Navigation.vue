<template>
    <div class="navigation-wrapper">
        <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/storyblok">Storyblok</RouterLink>
            <RouterLink to="/prismic">Prismic</RouterLink>
            <RouterLink to="/sanity">Sanity</RouterLink>
            <RouterLink to="/strapi">Stripi</RouterLink>
        </nav>
    </div>
</template>

<script setup lang="ts">
    import { RouterLink } from 'vue-router'
</script>

<style scoped>
@import '@/assets/base.css';

.navigation-wrapper {
    display: flex;
    justify-content: center;
    align-items: left;
    flex-direction: column;
    border-bottom: solid 1px var(--color-six);
    margin-bottom: 1rem;
    padding: 1rem 0;
}
</style>
