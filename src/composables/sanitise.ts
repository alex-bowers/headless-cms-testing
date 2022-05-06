import type { Blog, Product } from '@/types'

export function createBlog(data: any, cms: string): Blog {
    const author: { [key: string]: any} = {
        storyblok: data.relationships[0].content
    }

    return {
        ...data,
        author: author[cms] || {}
    }
}

export function createPageTitle(routePath: string): string {
    const words = routePath.split("-")
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1)
    }

    return words.join(" ")
}

export function createProduct(data: any, cms: string): Product {
    const image: { [key: string]: any} = {
        storyblok: data.images[0]
    }

    return {
        heading: data.heading,
        description: data.description,
        price: data.price,
        image: image[cms] || {},
        blogLink: data.blogLink,
    }
}
