<template>
    <div
        v-if="author"
        class="blog-view--author"
    >
        <span>Created by {{ $prismic.asText(author.name) }}</span>
        <img
            :src="author.avatar.url"
            :alt="author.avatar.alt"
            height="100"
        >
    </div>
</template>

<script lang="ts">
import { getSliceComponentProps } from '@prismicio/vue'

import type { PrismicAuthor } from '@/types'

export default {
    props: getSliceComponentProps(),
    computed: {
        author(): PrismicAuthor {
            return this.$props.slice.primary.blog_author.data
        },
    }
}
</script>

<style scoped></style>
