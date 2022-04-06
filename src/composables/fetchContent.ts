import cmsData from '@/assets/content.json'
import type { Blog, Content, Product } from '@/types'

const dataFromCMS: Content = cmsData

export function fetchProduct(slug: string): Product {
    return dataFromCMS.products[slug]
}

export function fetchBlog(slug: string): Blog {
    return dataFromCMS.blogs[slug]
}
