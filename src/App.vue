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
  font-weight: normal;
  margin: 0 auto;
  max-width: 1280px;
  padding: 2rem;
}
</style>
