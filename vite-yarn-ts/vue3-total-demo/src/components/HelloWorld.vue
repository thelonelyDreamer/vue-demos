<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
defineProps<{ msg: string, num?: number }>()
const names = ref([{ name: "小猫" }, { name: "小狗" }, { name: "小猪" }])
const search = ref("")
const matchNames = computed(() => {
  // console.log(names.value)
  const result = names.value.filter((item) => { return item.name.includes(search.value) })
  console.log(result)
  return result;
})
const handle = () => {
  console.log(names)
  names.value.push({ name: "" })
}
const mouseover = () => {
  console.log(window)
}
</script>

<template>
  <div>
    <input type="text" v-model="search" />
    <p v-for="(item, index) in matchNames" :key="index">{{ item.name }}</p>
  </div>
  <button @click="handle"></button>
  <button @mouseover="mouseover">事件</button>
</template>
