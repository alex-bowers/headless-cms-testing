<template>
  <div>
    <div v-if="blog">
      <div>
        <h3>{{ blog.heading }}</h3>
        <strong>{{ blog.subHeading }}</strong>
        <p>{{ blog.description }}</p>
      </div>
      <div>
        <h4>Content</h4>
        <div
          v-for="(paragraph, index) in blog.content"
          :key="index"
        >
            <h5>{{ paragraph.heading }}</h5>
            <p>{{ paragraph.description }}</p>
            <a
              v-if="paragraph.productLink"
              :href="`/${route.params.cms}/${route.params.store}/${paragraph.productLink}`"
            >View Product</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { fetchBlog } from '@/composables/fetchContent'

const route = useRoute()

const blog = computed(() => fetchBlog(route.params.slug.toString()))
</script>

<style scoped></style>
