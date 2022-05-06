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
