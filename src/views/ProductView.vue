<template>
  <div>
    <h3>{{ title }}</h3>
    <div v-if="product">
      <div>
        <img :src="product.image" alt="">
        <h4>{{ product.title }}</h4>
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

const product = computed(() => fetchProduct(route.params.slug))
const title = computed(() => createPageTitle(route.params.slug))
</script>

<style scoped></style>
