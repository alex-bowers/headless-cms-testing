<template>
    <div v-if="page.blocks">
        <div
            v-for="block in page.blocks"
            :key="block._uid"
        >
            <component
                :is="registeredComponents[block.component]"
                :blok="block"
                :key="block._uid"
            ></component>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { fetchStoryblokPage } from '@/composables/fetchContent'

import BlogAuthor from '@/components/BlogAuthor.vue';
import BlogContent from '@/components/BlogContent.vue';
import BlogDescription from '@/components/BlogDescription.vue';
const registeredComponents: any = {
    BlogAuthor,
    BlogContent,
    BlogDescription
}
const route = useRoute()
let page = ref({
    _uid: "",
    blocks: [
        {
            _uid: "",
            component: "",
        }
    ]
})

onMounted(() => {
    const store = route.params.store.toString()
    const slug = route.params.slug.toString()
    const fetchedPage = fetchStoryblokPage(store, slug)

    fetchedPage.then((result) => {
        page.value = result.story.content
    })
})
</script>

<style scoped></style>
