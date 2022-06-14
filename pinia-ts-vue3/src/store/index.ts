import { defineStore } from 'pinia'
import { getProducts, IProduct } from '../api/shop'


export const productStore = defineStore('product', {
    state: () => {
        return {
            all: [] as IProduct[]
        }
    },
    getters: {},
    actions: {
        async loadAll() {
            const ret = await getProducts()
            this.all = ret
        }
    }
})