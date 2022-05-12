<template>
    <div
        v-if="blok"
        class="blog-view--author"
    >
        <span>Created by {{ blok.author.name }}</span>
        <img
            v-if="blok.author.content.avatar"
            :src="blok.author.content.avatar.filename"
            :alt="blok.author.content.avatar.alt"
            height="100"
        >
    </div>
</template>

<script setup lang="ts">
defineProps({  blok: Object })
</script>

<style scoped>
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
</style>
