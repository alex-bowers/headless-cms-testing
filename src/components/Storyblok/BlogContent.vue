<template>
    <div
        v-if="blok"
        v-editable="blok"
        class="blog-view--content"
    >
        <div
            v-for="(paragraph, index) in blok.content"
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
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()

defineProps({  blok: Object })
</script>

<style scoped></style>
