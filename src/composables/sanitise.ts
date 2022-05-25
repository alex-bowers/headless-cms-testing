import { marked } from 'marked'
import type {
    Blog,
    BlogContent,
    PrismicBlogContent,
    Product,
} from '@/types'

export function convertMarkdownToHtml(markdown: string): string {
    return marked(markdown)
}

export function createBlog(data: any, cms: string): Blog {
    if (cms === 'prismic') {
        return {
            heading: data.heading[0].text,
            author: {
                name: data.author.data.name[0].text,
                avatar: {
                    filename: data.author.data.avatar.url,
                    alt: data.author.data.avatar.alt,
                }
            },
            // Prismic forces it's RichText format. Markdown is not an option.
            description: "",
            content: formatPrismicBlogContent(data.content),
        }
    }

    return {
        ...data,
        author: data.relationships[0].content || {}
    }
}

export function createPageTitle(titleSlug: string): string {
    const words = titleSlug.split("-")
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substring(1)
    }

    return words.join(" ")
}

export function createProduct(data: any, cms: string): Product {
    if (cms === 'prismic') {
        return {
            heading: data.heading[0].text,
            description: data.description[0].text,
            price: data.price[0].text,
            image: {
                alt: data.image.alt,
                filename: data.image.url,
            },
            blogLink: `blog/${data.bloglink.uid}`,
        }
    }

    return {
        heading: data.heading,
        description: data.description,
        price: data.price,
        image: data.images[0] || {},
        blogLink: data.blogLink,
    }
}

function formatPrismicBlogContent(content: PrismicBlogContent[]): BlogContent[] {
    return content.map(row => {
        return {
            heading: row.heading1[0].text,
            description: row.description1[0].text,
            productLink: `product/${row.productlink.uid}`,
            image: {
                alt: row.image.alt,
                filename: row.image.url,
            }
        }
    })
}
