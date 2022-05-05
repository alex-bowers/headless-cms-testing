import StoryblokClient from 'storyblok-js-client';
import { createProduct } from '@/composables/sanitise'
import cmsData from '@/assets/content.json'
import type { Blog, Content, Product } from '@/types'

const dataFromCMS: Content = cmsData
const storyblokToken = import.meta.env.VITE_STORYBLOK_TOKEN || ''
const Storyblok = new StoryblokClient({
    accessToken: storyblokToken.toString(),
});

export function fetchProduct(slug: string, cms: string): Promise<Product> | Product {
    const services: { [key: string]: Promise<Product>} = {
        storyblok: storyBlokProduct(slug)
    }

    if (cms in services) {
        return Promise.resolve(services[cms].then(data => createProduct(data, cms)))
        .then(product => product)
    }

    return dataFromCMS.products[slug]
}

export function fetchBlog(slug: string): Blog {
    return dataFromCMS.blogs[slug]
}

function storyBlokProduct(slug: string) {
    return Storyblok.get(`cdn/stories/products/${slug}`, {
        version: 'draft',
    }).then(({ data }) => {
        return data.story.content;
    })
}
