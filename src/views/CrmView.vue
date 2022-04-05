<template>
  <div class="storyblok">
    <h1>{{ title }} CMS</h1>

    <div>
      <router-link :to="`/${route.params.crm}/clothes`">
        Clothes Store
      </router-link>
      <router-link :to="`/${route.params.crm}/hat`">
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

const title = computed(() => createPageTitle(route.params.crm))
</script>

<style scoped>
a {
  padding: 0 1rem;
}
</style>
