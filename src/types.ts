// External Types.

export interface Blog {
    heading: string,
    author: BlogAuthor,
    description: string,
    content: BlogContent[],
    relationships?: any,
}

export interface BlogContent {
    description: string,
    heading:string,
    image: {
        alt?: string,
        filename: string,
    },
    productLink: string,
}

export interface Content {
    products: ContentProduct,
    blogs: ContentBlog
}

export interface PageRouteParams {
    cms: string,
    store: string,
    slug: string,
}

export interface PrismicBlogContent {
    description1: any[],
    heading1: any[],
    image: any,
    productlink: any,
}

export interface PrismicBlogData {
    author: any,
    content: PrismicBlogContent,
    description: any[],
    heading: any[],
}

export interface PrismicProductData {
    blogLink: any,
    description: any[],
    heading: any[],
    image: any,
    price: any[],
}

export interface Product {
    heading: string,
    description: string,
    price: string,
    image: ProductImage,
    blogLink?: string | null,
}

interface ProductImage {
    filename: string,
    alt: string
}

export interface Services {
    [key: string]: ServiceOptions
}

export interface Store {
    pages: StorePages
}

export interface StoryblokData {
    story: StoryBlockDataStory,
    cv: number,
    rels: any[],
    links: any[]
}

export interface StoryBlockDataStory {
    name: string,
    created_at: string,
    published_at: string | null,
    id: number,
    uuid: string,
    content: any,
    slug: string,
    full_slug: string,
    sort_by_date: null,
    position: number,
    tag_list: string[],
    is_startpage: boolean,
    parent_id: number,
    meta_data: any,
    group_id: string,
    first_published_at: string | null,
    release_id: number | null,
    lang: string,
    path: string | null,
    alternates: any[],
    default_full_slug: string,
    translated_slugs: string
}

export interface StoryblokResponse {
    data: StoryblokData
}

// Internal Types.

interface BlogAuthor {
    name: string,
    avatar: BlogAuthorAvatar,
}

interface BlogAuthorAvatar {
    filename: string,
    alt: string,
}

interface ContentBlog {
    [key: string]: Blog
}

interface ContentProduct {
    [key: string]: Product
}

interface ServiceOptions {
    method: Function,
    params: string[]
}

interface StorePages {
    [key: string]: StorePageContext
}

interface StorePageBlog {
    slug: string,
}

interface StorePageContext {
    name: string,
    products: StorePageProduct[],
    blogs: StorePageBlog[]
}

interface StorePageProduct {
    slug: string,
}
