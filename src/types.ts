export interface Content {
    products: ContentProduct,
    blogs: ContentBlog
}

export interface ContentProduct {
    [key: string]: Product
}

export interface ContentBlog {
    [key: string]: Blog
}

export interface Product {
    heading: string,
    description: string,
    price: string,
    image: ProductImage,
    blogLink?: string | null,
}

export interface ProductImage {
    filename: string,
    alt: string
}

export interface Blog {
    heading: string,
    author: BlogAuthor,
    description: string,
    content: any,
    relationships?: any,
}

export interface BlogAuthor {
    name: string,
    avatar: BlogAuthorAvatar,
}

export interface BlogAuthorAvatar {
    filename: string,
    alt: string,
}

export interface Store {
    pages: StorePages
}

export interface StorePages {
    [key: string]: StorePageContext
}

export interface StorePageContext {
    name: string,
    products: StorePageProduct[],
    blogs: StorePageBlog[]
}

export interface StorePageProduct {
    slug: string,
}

export interface StorePageBlog {
    slug: string,
}

export interface PageRouteParams {
    cms: string,
    store: string,
    slug: string,
}

export interface StoryblokResponse {
    data: StoryblokData
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
