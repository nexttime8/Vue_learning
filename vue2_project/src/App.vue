<template>
  <div class="whole">
    <BlogHeader />
    <router-view></router-view>
    <BlogFooter />
  </div>
</template>

<script>
export default {
  name: "BlogWeb",
  components: {},
}
</script>

<style style="css">
:root {
  --card-width: 12.5rem;
  --card-height: 18.75rem;

  --card-transition-duration: 800ms;
  --card-transition-easing: ease;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000b00;
  overflow: hidden;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 3.75rem;
}

@media only screen and (min-width: 50rem) {
  :root {
    --card-width: 15.625rem;
    --card-height: 25rem;
  }
}

.whole {
  width: 100%;
  height: 100%;
}

router-view {
  width: 100%;
  height: 100%;
}
</style>
