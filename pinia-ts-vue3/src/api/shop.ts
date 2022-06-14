export interface IProduct {
    id: number,
    title: string,
    price: number,
    store: number,
}

const products: IProduct[] = [
    { id: 1, title: '手机', price: 2000, store: 100 },
    { id: 2, title: '手机', price: 2000, store: 100 },
    { id: 3, title: '手机', price: 2000, store: 100 },
]

export const getProducts = async () => {
    await wait(100)
    return products
}

export const buyProducts = async () => {
    await (100)
    return Math.random() > 0.5
}

async function wait(delay: number) {
    return new Promise((resolve) => setTimeout(resolve, delay))
}