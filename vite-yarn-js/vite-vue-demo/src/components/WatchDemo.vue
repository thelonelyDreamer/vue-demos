<template>
  <h2>{{ msg }}</h2>
  <span>count：</span><input type="number" v-model="count" />
  <button @click="log">打印 count 值</button>
</template>

<script>
export default {
  data: () => {
    return {
      msg: "watch 属性演示",
      count: 0,
    };
  },
  methods: {
    log() {
      console.log(this.count);
    },
  },
  watch: {
    count: (value1, value2) => {
      console.log(value1 + " " + value2);
    },
  },
};
</script>