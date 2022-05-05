import StoryblokClient from 'storyblok-js-client';
import { createBlog, createProduct } from '@/composables/sanitise'
import cmsData from '@/assets/content.json'
import type { Blog, Content, Product } from '@/types'

const dataFromCMS: Content = cmsData
const storyblokToken = import.meta.env.VITE_STORYBLOK_TOKEN || ''
const Storyblok = new StoryblokClient({
    accessToken: storyblokToken.toString(),
});

export function fetchProduct(slug: string, cms: string): Promise<Product> | Product {
    const services: { [key: string]: Promise<Product>} = {
        storyblok: fetchStoryblokProduct(slug)
    }

    if (cms in services) {
        return services[cms].then(data => createProduct(data, cms))
    }

    return dataFromCMS.products[slug]
}

export function fetchBlog(slug: string, cms: string): Promise<Blog> | Blog {
    const services: { [key: string]: Promise<Product>} = {
        storyblok: fetchStoryblokBlog(slug)
    }

    if (cms in services) {
        return services[cms].then(data => createBlog(data, cms))
    }

    return dataFromCMS.blogs[slug]
}

function fetchStoryblokBlog(slug: string) {
    return Storyblok.get(`cdn/stories/blogs/${slug}`, {
        version: 'draft',
    }).then(({ data }) => data.story)
}

function fetchStoryblokProduct(slug: string) {
    return Storyblok.get(`cdn/stories/products/${slug}`, {
        version: 'draft',
    }).then(({ data }) => data.story.content)
}
