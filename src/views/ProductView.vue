<template>
    <div
        v-if="product"
        class="product-view"
    >
        <div>
            <h2>{{ product.heading }}</h2>
            <div>
                <p>{{ product.description }}</p>
                <span v-if="product.price">
                    Price: {{ product.price }}
                </span>
            </div>
            <a
                v-if="product.blogLink"
                :href="`/${route.params.cms}/${route.params.store}/${product.blogLink}`"
            >View Blog</a>
        </div>
        <img
            :src="product.image.filename"
            :alt="product.image.alt"
            height="200"
        >
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

<style scoped>
.product-view {
    display: flex;
    justify-content: space-evenly;
    align-items: end;
}
</style>
