export interface Product {
    heading: string,
    description: string,
    price: string,
    image: string,
    blogLink: string | null,
}

export interface Blog {
    heading: string,
    subHeading: string,
    description: string,
    content: any,
}
