export type Product = {
    id: number,
    name: string,
    description: string,
    price: number
}

export type CartProduct = {
    product: Product,
    quantity: number
}