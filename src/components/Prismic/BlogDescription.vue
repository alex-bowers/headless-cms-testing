<template>
    <div>
        <PrismicRichText :field="slice.primary.blog_description" />
    </div>
</template>

<script lang="ts">
import { getSliceComponentProps } from '@prismicio/vue'

export default {
    props: getSliceComponentProps()
}
</script>

<style scoped></style>
