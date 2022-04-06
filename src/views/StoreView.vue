<template>
  <div>
    <h2>{{ title }} Store</h2>

    <div>
        <strong>Products</strong>
        <router-link
            v-for="(item, index) in pages.products"
            :key="index"
            :to="`${route.path}/product/${item.slug}`"
        >{{ item.slug }}</router-link>
    </div>
    <div>
        <strong>Blog</strong>
        <router-link
            v-for="(item, index) in pages.blogs"
            :key="index"
            :to="`${route.path}/blog/${item.slug}`"
        >{{ item.slug }}</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useContentStore } from "@/stores/content"
import { createPageTitle } from '@/composables/sanitise'

const route = useRoute()
const store = useContentStore()
const storeParam: string = route.params.store.toString()

const pages = computed(() => store.getPages(storeParam))
const title = computed(() => createPageTitle(storeParam))
</script>

<style scoped>
a {
  padding: 0 1rem;
}
</style>
