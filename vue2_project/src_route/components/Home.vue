<template>
  <div>
    <router-link to="/home/message" active-class="active">Message</router-link>
    <router-link to="/home/other" active-class="active">Other</router-link>
    <keep-alive :include="['MessageComponent', 'OtherComponent']">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "homeComponent",
}
</script>

<style></style>
