<template>
    <div
        v-if="blok"
        v-editable="blok"
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

<style scoped></style>
