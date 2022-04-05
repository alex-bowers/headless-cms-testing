import cmsData from '@/assets/content.json'
import type { Blog, Product } from '@/types'

export function fetchProduct(slug: string | string[]): Product {
    return cmsData.products[slug]
}

export function fetchBlog(slug: string | string[]): Blog {
    return cmsData.blogs[slug]
}
