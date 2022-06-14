import { defineStore } from 'pinia'
import { getProducts, IProduct } from '../api/shop'

export const cartStore = defineStore('cart', {
    state: () => {
        return {
            cart: [] as IProduct[],
        }
    },
    getters: {},
    actions: {
        addP2D(product: IProduct) {
            console.log(product)
        }
    }
})