<template>
  <div>
    <h3>{{ title }}</h3>
    <div v-if="product">
      <div>
        <img :src="product.image" alt="">
        <h4>{{ product.heading }}</h4>
        <p>{{ product.description }}</p>
        Price: {{ product.price }}
      </div>
      <a
        v-if="product.blogLink"
        :href="`/${route.params.crm}/${route.params.store}/${product.blogLink}`"
      >View Blog</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { fetchProduct } from '@/composables/fetchContent'
import { createPageTitle } from '@/composables/sanitise'

const route = useRoute()
const slugParam: string = route.params.slug.toString()

const product = computed(() => fetchProduct(slugParam))
const title = computed(() => createPageTitle(slugParam))
</script>

<style scoped></style>
