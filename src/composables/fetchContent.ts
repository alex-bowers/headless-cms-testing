import StoryblokClient from 'storyblok-js-client';
import { createBlog, createProduct } from '@/composables/sanitise'
import cmsData from '@/assets/content.json'
import type { Blog, Content, PageRouteParams, Product } from '@/types'

const dataFromCMS: Content = cmsData
const storyblokToken = import.meta.env.VITE_STORYBLOK_TOKEN || ''
const Storyblok = new StoryblokClient({
    accessToken: storyblokToken.toString(),
});

export function fetchProduct({ cms, store, slug }: PageRouteParams): Promise<Product> | Product {
    const services: { [key: string]: Promise<Product>} = {
        storyblok: fetchStoryblokProduct(store, slug)
    }

    if (cms in services) {
        return services[cms].then(data => createProduct(data, cms))
    }

    return dataFromCMS.products[slug]
}

export function fetchBlog({ cms, store, slug }: PageRouteParams): Promise<Blog> | Blog {
    const services: { [key: string]: Promise<Blog>} = {
        storyblok: fetchStoryblokBlog(store, slug)
    }

    if (cms in services) {
        return services[cms].then(data => createBlog(data, cms))
    }

    return dataFromCMS.blogs[slug]
}

function fetchStoryblokBlog(store: string, slug: string) {
    return Storyblok.get(`cdn/stories/storyblok/${store}/blog/${slug}`, {
        version: 'draft',
        resolve_relations: 'author',
    }).then(({ data }) => {
        return {
            ...data.story.content,
            relationships: data.rels,
        }
    })
}

function fetchStoryblokProduct(store: string, slug: string) {
    return Storyblok.get(`cdn/stories/storyblok/${store}/product/${slug}`, {
        version: 'draft',
    }).then(({ data }) => data.story.content)
}
