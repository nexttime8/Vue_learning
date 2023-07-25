<template>
  <div class="navBar">
    <div>
      <input type="text" :value="value" @input="updateValue" />
      <button @click="addInfoHandler">添加</button>
      <!--不直接调用addInfo函数，因为要清空input的value-->
      <button @click="randomInfo">随机生成</button>
    </div>
    <ul>
      <li v-for="info in infos" :key="info.id">{{ info.message }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex"
export default {
  name: "infoComponent",
  data() {
    return {
      value: "",
    }
  },
  computed: {
    ...mapState("aboutOptions", ["infos"]),
  },
  methods: {
    ...mapActions({ addInfo: "aboutOptions/addInfo" }),
    ...mapActions({ randomInfo: "aboutOptions/randomInfo" }),
    updateValue(event) {
      this.value = event.target.value // 更新输入框的数据
    },
    addInfoHandler() {
      this.addInfo(this.value)
      this.value = ""
    },
  },
  beforeDestroy() {
    console.log("Info被销毁了")
  },
}
</script>

<style scoped lang="css">
.navBar {
  display: flex;
  flex-direction: column;
}
</style>
