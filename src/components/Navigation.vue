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
.navigation-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

}

a {
  padding: 0 1rem;
}
</style>
