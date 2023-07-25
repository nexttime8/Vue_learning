<template>
  <div class="news">
    <button @click="getQuotes">添加名人名言</button>
    <ul>
      <li v-for="item in quotes" :key="item.id">
        <h4>名言：{{ item.quote }}</h4>
        <h4>名人：{{ item.name }}</h4>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex"
export default {
  name: "newsComponent",
  computed: {
    ...mapState("aboutOptions", ["quotes"]),
  },
  methods: {
    ...mapActions({ getQuotes: "aboutOptions/getQuotes" }),
  },
}
</script>

<style></style>
