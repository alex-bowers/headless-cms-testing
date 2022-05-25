import { useStoryblokApi } from '@storyblok/vue'
import axios from "axios"

import { createBlog, createProduct } from '@/composables/sanitise'
import cmsData from '@/assets/content.json'
import type {
    Blog,
    Services,
    Content,
    PageRouteParams,
    PrismicBlogData,
    PrismicProductData,
    Product,
    StoryblokData,
    StoryblokResponse
} from '@/types'

const dataFromCMS: Content = cmsData
const storyblokApi = useStoryblokApi();

export function fetchBlog({ cms, store, slug }: PageRouteParams): Promise<Blog> | Blog {
    const services: Services = {
        prismic: {
            method: fetchPrismicDocument,
            params: ['blog', slug]
        },
        storyblok: {
            method: fetchStoryblokBlog,
            params: [store, slug]
        }
    }

    if (cms in services) {
        return services[cms].method
            .apply(null, services[cms].params)
            .then((data: PrismicBlogData) => createBlog(data, cms))
    }

    return dataFromCMS.blogs[slug]
}

export function fetchProduct({ cms, store, slug }: PageRouteParams): Promise<Product> | Product {
    const services: Services = {
        prismic: {
            method: fetchPrismicDocument,
            params: ['product', slug]
        },
        storyblok: {
            method: fetchStoryblokProduct,
            params: [store, slug]
        }
    }

    if (cms in services) {
        return services[cms].method
            .apply(null, services[cms].params)
            .then((data: PrismicProductData) => createProduct(data, cms))
    }

    return dataFromCMS.products[slug]
}

// Rest API requests.
function fetchPrismicDocument(type: string, slug: string): Promise<PrismicBlogData> |Promise<PrismicProductData> {
    return fetchPrismicRef()
        .then(ref => {
            return axios.get(
                'https://warehouse-test-site.cdn.prismic.io/api/v2/documents/search', {
                    params: {
                        q: `[[at(my.${type}.uid, "${slug}")]]`,
                        ref,
                        fetchLinks: type === 'blog'
                            ? 'author.name,author.avatar'
                            : '',
                    }
                }
            ).then(({ data }) => data.results[0].data)
        })
}

function fetchPrismicRef(): Promise<string> {
    return axios.get('https://warehouse-test-site.cdn.prismic.io/api/v2')
        .then(({ data }) => data.refs[0].ref)
}

function fetchStoryblokBlog(store: string, slug: string): Promise<Blog> {
    return axios.get(`https://api.storyblok.com/v2/cdn/stories/storyblok/${store}/blog/${slug}`, {
        params: {
            resolve_relations: 'author',
            token: import.meta.env.VITE_STORYBLOK_TOKEN,
            version: 'draft',
        }
    }).then(({ data }: StoryblokResponse) => {
        return {
            ...data.story.content,
            relationships: data.rels,
        }
    })
}

function fetchStoryblokProduct(store: string, slug: string): Promise<Product> {
    return axios.get(`https://api.storyblok.com/v2/cdn/stories/storyblok/${store}/product/${slug}`, {
        params: {
            token: import.meta.env.VITE_STORYBLOK_TOKEN,
            version: 'draft',
        }
    }).then(({ data }: StoryblokResponse) => data.story.content)
}

// Storyblok live page editor.
export function fetchStoryblokPage(store: string, slug: string): Promise<StoryblokData> {
    return storyblokApi.get(`cdn/stories/storyblok/${store}/page/${slug}`, {
        version: 'draft',
        resolve_relations: 'BlogAuthor.author',
    }).then(({ data }: StoryblokResponse) => data)
}
