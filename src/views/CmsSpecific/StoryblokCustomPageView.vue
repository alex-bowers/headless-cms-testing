<template>
    <div v-if="page.blocks">
        <h2>{{ page.name }}</h2>
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
import { useStoryblokBridge } from '@storyblok/vue';
import type { StoryblokData, StoryBlockDataStory } from "@/types";

import BlogAuthor from '@/components/Storyblok/BlogAuthor.vue';
import BlogContent from '@/components/Storyblok/BlogContent.vue';
import BlogDescription from '@/components/Storyblok/BlogDescription.vue';
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
    ],
    name: ""
})
let pageID = ref(0)

onMounted(() => {
    const store = route.params.store.toString()
    const slug = route.params.slug.toString()
    const fetchedPage = fetchStoryblokPage(store, slug)

    fetchedPage.then((result: StoryblokData) => {
        page.value = result.story.content
        pageID.value = result.story.id
    }).then(() => {
        useStoryblokBridge(pageID.value, (story: StoryBlockDataStory) => (page.value = story.content), {
            resolveRelations: ['BlogAuthor.author'],
        });
    })
})
</script>

<style scoped></style>
