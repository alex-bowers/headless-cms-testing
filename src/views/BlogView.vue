<template>
<div v-if="blog">
    <div>
        <h3>{{ blog.heading }}</h3>

        <p>{{ blog.description }}</p>
    </div>
    <div>
        <h4>Content</h4>
        <div
            v-for="(paragraph, index) in blog.content"
            :key="index"
        >
            <h5>{{ paragraph.heading }}</h5>
            <p>{{ paragraph.description }}</p>
            <a
                v-if="paragraph.productLink"
                :href="`/${route.params.cms}/${route.params.store}/${paragraph.productLink}`"
            >View Product</a>
        </div>
    </div>
    <div>
        <strong>Created by {{ blog.author.name }}</strong>
        <img
            v-if="blog.author.avatar"
            :src="blog.author.avatar.filename"
            :alt="blog.author.avatar.alt"
            height="100"
        >
    </div>
</div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { fetchBlog } from '@/composables/fetchContent'
import type { Blog } from '@/types'

const route = useRoute()
const routeParam: string = route.params.cms.toString()
const slugParam: string = route.params.slug.toString()
let blog = ref<Blog>({
    heading: "",
    author: {
        name: "",
        avatar: {
            filename: "",
            alt: "",
        },
    },
    description: "",
    content: [],
})

onMounted(() => {
    const fetchedBlog = fetchBlog(slugParam, routeParam)

    if (fetchedBlog instanceof Promise) {
        fetchedBlog.then((result: Blog) => {
            blog.value = result
        })
        } else {
        blog.value = fetchedBlog
    }
})
</script>

<style scoped></style>
