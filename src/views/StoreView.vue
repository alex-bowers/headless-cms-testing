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
import { computed, watch, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useContentStore } from "@/stores/content"
import { createPageTitle } from '@/composables/sanitise'

const route = useRoute()
const store = useContentStore()
const storeParam = ref(route.params.store.toString())

const pages = computed(() => store.getPages(storeParam.value))
const title = computed(() => createPageTitle(storeParam.value))

watch(route, (newRoute) => {
  storeParam.value = newRoute.params.store.toString()
})
</script>

<style scoped>
a {
  padding: 0 1rem;
}
</style>
