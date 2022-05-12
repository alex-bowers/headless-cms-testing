<template>
    <div
        v-if="blok"
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

<style scoped>
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
