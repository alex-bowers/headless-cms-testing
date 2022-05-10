<template>
    <div class="cms-view">
        <h1>{{ title }} CMS</h1>

        <div class="cms-view--links">
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
@import '@/assets/base.css';

.cms-view--links {
    margin-bottom: 1rem;
}
</style>
