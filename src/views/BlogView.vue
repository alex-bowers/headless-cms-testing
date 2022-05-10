<template>
<div
    v-if="blog"
    class="blog-view"
>
    <h2>{{ blog.heading }}</h2>
    <div class="blog-view--description">
        <p v-html="convertMarkdownToHtml(blog.description)"></p>
    </div>
    <div class="blog-view--content">
        <div
            v-for="(paragraph, index) in blog.content"
            :key="index"
            class="blog-view--content--item"
        >
            <div class="item--text">
                <div>
                    <h3>{{ paragraph.heading }}</h3>
                    <p>{{ paragraph.description }}</p>
                </div>
                <a
                    v-if="paragraph.productLink"
                    :href="`/${route.params.cms}/${route.params.store}/${paragraph.productLink}`"
                >View Product</a>
            </div>
            <img
                :alt="paragraph.image.alt"
                :src="paragraph.image.filename"
                height="200"
            >
        </div>
    </div>
    <div
        v-if="blog.author.name"
        class="blog-view--author"
    >
        <span>Created by {{ blog.author.name }}</span>
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
import { convertMarkdownToHtml } from '@/composables/sanitise'
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

<style scoped>
@import '@/assets/base.css';

.blog-view--author {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    background-color: var(--color-text);
    border-radius: 1rem;
    color: var(--color-one);
    padding: 1rem;
    width: 300px;
}

.blog-view--author span {
    width: 110px;
}

.blog-view--author img {
    border-radius: 200px;
}

.blog-view--content {
    background-color: var(--color-two);
    margin: 1rem 0;
    border-radius: 1rem;
}

.blog-view--content--item {
    display: flex;
    justify-content: space-evenly;
    padding: 1.75rem;
}

.blog-view--content--item:nth-child(2) {
    background-color: var(--color-three);
}

.blog-view--content--item .item--text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 500px;
}
</style>
