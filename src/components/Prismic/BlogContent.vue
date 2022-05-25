<template>
    <div
        v-if="$props.index"
        class="blog-view--content"
    >
        <div
            v-for="(item, index) in $props.slice.items"
            :key="index"
            class="blog-view--content--item"
        >
            <div class="item--text">
                <div>
                    <h3>{{ $prismic.asText(item.product_heading) }}</h3>
                    <PrismicRichText :field="item.product_description" />
                </div>
                <a
                    v-if="item.product_link.uid"
                    :href="`/prismic/${$route.params.store}/product/${item.product_link.uid}`"
                >View Product</a>
            </div>
            <PrismicImage :field="item.product_image" />
        </div>
    </div>
</template>

<script lang="ts">
import { getSliceComponentProps } from '@prismicio/vue'

export default {
    props: getSliceComponentProps(),
}
</script>

<style scoped></style>
