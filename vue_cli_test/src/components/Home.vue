<template>
  <div class="container">
    <div class="app">
      <Accordian />
      <InfoList />
      <Background />
    </div>
    <!-- <div class="loading__wrapper">
      <div class="loader--text">Loading...</div>
      <div class="loader">
        <span></span>
      </div>
    </div> -->
  </div>
</template>

<script>
import Accordian from "@/components/Accordian"
import Background from "@/components/Background"
import InfoList from "@/components/InfoList"

export default {
  name: "Home",
  data() {
    return {}
  },
  methods: {
    swapCards(direction) {
      const index = this.$refs.cardsContainerEl.querySelector(".current--card")

      this.swapInfosClass(direction, index)
      this.swapCardsClass(direction, index)

      this.removeCardEvents(currentCardEl)
    },
  },
  components: {
    Accordian,
    Background,
    InfoList,
  },
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
}
.app {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loading__wrapper {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #000;
  z-index: 200;
  .loader--text {
    color: #fff;
    font-family: "Montserrat";
    font-weight: 500;
    margin-bottom: 1.4rem;
  }
  .loader {
    position: relative;
    width: 200px;
    height: 2px;
    background: rgba(255, 255, 255, 0.25);
    span {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: rgb(255, 0, 0);
      transform: scaleX(0);
      transform-origin: left;
    }
  }
}
</style>
