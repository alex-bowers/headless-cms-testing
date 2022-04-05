<script setup lang="ts">
import { RouterView } from 'vue-router'

import Navigation from '@/components/Navigation.vue'
</script>

<template>
  <header>
    <Navigation />
  </header>

  <RouterView />
</template>

<style>
@import '@/assets/base.css';

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}
</style>
