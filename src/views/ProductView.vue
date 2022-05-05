<template>
    <div v-if="product">
        <h3>{{ product.heading }}</h3>
        <div>
            <img :src="product.image.filename" :alt="product.image.alt">
            <p>{{ product.description }}</p>
            Price: {{ product.price }}
        </div>
        <a
            v-if="product.blogLink"
            :href="`/${route.params.cms}/${route.params.store}/${product.blogLink}`"
        >View Blog</a>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { fetchProduct } from '@/composables/fetchContent'
import type { Product } from '@/types'

const route = useRoute()
const routeParam: string = route.params.cms.toString()
const slugParam: string = route.params.slug.toString()

let product = ref<Product>({
    heading: '',
    description: '',
    price: '',
    image: {
        filename: '',
        alt: ''
    },
    blogLink: ''
})

onMounted(() => {
    const fetchedProduct = fetchProduct(slugParam, routeParam)

    if (fetchedProduct instanceof Promise) {
        fetchedProduct.then((result: Product) => {
            product.value = result
        })
        } else {
        product.value = fetchedProduct
    }
})
</script>

<style scoped></style>
