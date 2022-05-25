<template>
    <div v-if="data">
        <h2>
            {{ $prismic.asText(data.data.heading) }}
        </h2>
        <SliceZone
            :components="components"
            :slices="data.data.body"
        />
    </div>
</template>

<script setup lang="ts">
import { fetchPrismicPage } from '@/composables/fetchContent'

import blog_author from '@/components/Prismic/BlogAuthor.vue';
import blog_content from '@/components/Prismic/BlogContent.vue';
import blog_description from '@/components/Prismic/BlogDescription.vue';

const { data } = fetchPrismicPage('custom-layout')

const components = {
    blog_author,
    blog_content,
    blog_description
}

</script>

<style scoped></style>
