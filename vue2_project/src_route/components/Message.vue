<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <router-link
          :to="{
            // path: '/home/message/detail',
            // query: {
            //   id: m.id,
            //   title: m.title,
            // },
            path: '/home/message/detail',
            params: {
              id: m.id,
              title: m.title,
            },
          }"
          active-class="active"
          >Detail</router-link
        >
      </li>
    </ul>
    <!-- <router-link to="/home/message/detail">Detail</router-link> -->

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "MessageComponent",
  data() {
    return {
      messageList: [
        { id: "001", title: "消息001" },
        { id: "002", title: "消息002" },
        { id: "003", title: "消息003" },
      ],
    }
  },
  beforeDestroy() {
    console.log("message被销毁了")
  },
  mounted() {
    console.log("message被挂载了")
  },
}
</script>

<style scoped lang="css">
ul {
  list-style: none;
}
li {
  display: inline-block;
  margin-top: 20px;
}
a {
  width: 50px;
  height: 30px;
}
</style>
