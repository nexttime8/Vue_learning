<template>
  <Home />
</template>

<script>
import Home from "@/components/Home"

export default {
  name: "AnimationWeb",
  components: {
    Home,
  },
}
</script>

<style>
:root {
  --card-width: 200px;
  --card-height: 300px;

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
  background: rgba(0, 0, 0, 0.787);
  overflow: hidden;
}

@media only screen and (min-width: 800px) {
  :root {
    --card-width: 250px;
    --card-height: 400px;
  }
}
</style>
