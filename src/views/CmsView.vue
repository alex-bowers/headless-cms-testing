<template>
  <div class="storyblok">
    <h1>{{ title }} CMS</h1>

    <div>
      <router-link :to="`/${route.params.cms}/clothes`">
        Clothes Store
      </router-link>
      <router-link :to="`/${route.params.cms}/hat`">
        Hat Store
      </router-link>
    </div>

    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, RouterView } from 'vue-router'
import { createPageTitle } from '@/composables/sanitise'

const route = useRoute()

const title = computed(() => createPageTitle(route.params.cms.toString()))
</script>

<style scoped>
a {
  padding: 0 1rem;
}
</style>
