<template>
  <div>
    <h3>sum的值为：{{ sum }}</h3>
    <button @click="increament(n)">加</button>
    <button @click="decreament(n)">减</button>
    <h4>sum的10倍为：{{ bigSum }}</h4>
    <h5>动态变化的值：{{ m }}</h5>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex" // npm install --save vuex@3
export default {
  name: "OtherComponent", // 必须是多个名称组成
  data() {
    return {
      n: 1,
      m: 1,
    }
  },
  computed: {
    ...mapState("homeOptions", ["sum"]),
    ...mapGetters("homeOptions", ["bigSum"]),
  },
  methods: {
    // 用mapMutations的写法
    ...mapMutations({
      increament: "homeOptions/INCREAMENT",
      decreament: "homeOptions/DECREAMENT",
    }),
    // 不用mapMutations的写法
    // increament(value) {
    //   this.$store.commit("INCREAMENT", value)
    // },
    // decreament(value) {
    //   this.$store.commit("DECREAMENT", value)
    // },
  },
  activated() {
    this.timer = setInterval(() => {
      // 两个生命周期公用的数据，放在this上
      this.m += 1
    }, 1000)
    console.log("other被激活了")
  },
  deactivated() {
    console.log("other失效了", this.m)
    clearInterval(this.timer)
  },
  mounted() {
    console.log("other被挂载了")
  },
  beforeDestroy() {
    console.log("other被销毁了")
  },
}
</script>

<style></style>
