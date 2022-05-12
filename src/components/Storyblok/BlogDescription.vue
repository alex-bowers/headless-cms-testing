<template>
    <div
        v-if="blok"
        v-editable="blok"
        class="blog-view--description"
    >
        <p v-html="convertMarkdownToHtml(blok.description)"></p>
    </div>
</template>

<script setup lang="ts">
import { convertMarkdownToHtml } from '@/composables/sanitise'

defineProps({  blok: Object })
</script>

<style scoped></style>
