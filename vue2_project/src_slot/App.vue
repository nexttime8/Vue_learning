<template>
  <div class="container">
    <componentIn><img src="../../images/image-1.png" alt=""></componentIn>
    <componentIn>
      <ul>
        <li>sleeping</li>
        <li>having</li>
        <li>reading</li>
        <li>swimming</li>
    </ul>
  </componentIn>
    <componentIn>
      <video src=""></video>
    </componentIn>
  </div>
</template>

<script>
import componentIn from './components/componentIn.vue';
export default {
    name:"",
    components:{componentIn}
}
</script>

<style>
  .container{
    display: flex;
    justify-content: space-around;
  }
</style>