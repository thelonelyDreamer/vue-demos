<template>
    <ul>
        <li v-for="item, gid in store.all" key="gid">
            {{ item.title }}--{{ item.price }}
            <br />
            <button @click="cart.addP2D(item)">添加到购物车</button>
        </li>
    </ul>
</template>

<script lang="ts" setup >
import { productStore } from '../store/index'
import { cartStore } from '../store/cart'
const store = productStore()
const cart = cartStore()
store.loadAll()

</script>