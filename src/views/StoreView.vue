<template>
    <div class="store-view">
        <div class="store-view--items">
            <div>
                <h3>Products:</h3>
                <ul>
                    <li
                        v-for="(item, index) in pages.products"
                        :key="index"
                    >
                        <router-link
                            :to="`${route.path}/product/${item.slug}`"
                        >{{ createPageTitle(item.slug) }}</router-link>
                    </li>
                </ul>
            </div>
            <div>
                <h3>Blog:</h3>
                <ul>
                    <li
                        v-for="(item, index) in pages.blogs"
                        :key="index"
                    >
                        <router-link
                            :to="`${route.path}/blog/${item.slug}`"
                        >{{ createPageTitle(item.slug) }}</router-link>
                    </li>
                    <li v-if="cmsParam === 'prismic' || cmsParam === 'storyblok'">
                        <router-link
                            :to="`${route.path}/page/custom-layout`"
                        >Custom Editable Blog</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, watch, ref } from 'vue'
import { useRoute } from 'vue-router'
import { createPageTitle } from "@/composables/sanitise"
import { useContentStore } from "@/stores/content"

const route = useRoute()
const store = useContentStore()
const cmsParam = ref(route.params.cms.toString())
const storeParam = ref(route.params.store.toString())

const pages = computed(() => store.getPages(storeParam.value))

watch(route, (newRoute) => {
    storeParam.value = newRoute.params.store.toString()
})
</script>

<style scoped>
.store-view--items {
    display: flex;
    justify-content: space-evenly;
    margin-top: 1rem;
}
</style>
