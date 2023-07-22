<template>
  <div>
    <div class="infoList">
      <div class="info__wrapper">
        <div
          class="info"
          v-for="(info, index) in sharedData.infos"
          :key="info.name"
          :class="swapInfosClass"
        >
          <h1 class="text name">{{ info.name }}</h1>
          <h4 class="text location">{{ info.location }}</h4>
          <p class="text description">{{ info.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { sharedData } from "@/assets/data"
export default {
  name: "InfoList",
  data() {
    return {
      sharedData,
    }
  },
  methods: {
    swapInfosClass(direction = "") {
      if (direction === "left") {
        this.$store.commit("INCREAMENTTWO", 2)
        return classList[this.$store.state.currentCardIndex].info
      } else if (direction === "right") {
        this.$store.commit("INCREAMENTTWO", 1)
        return classList[this.$store.state.currentCardIndex].info
      } else if (direction == "") {
        this.$store.commit("INCREAMENTTWO", 0)
        return classList[this.$store.state.currentCardIndex].info
      }
    },
  },
}
</script>

<style scoped lang="scss">
.infoList {
  // position: absolute;
  width: calc(3 * var(--card-width));
  height: var(--card-height);
  pointer-events: none;

  .info__wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    perspective: 1000px;
    transform-style: preserve-3d;
  }
}

.info {
  margin-bottom: calc(var(--card-height) / 8);
  margin-left: calc(var(--card-width) / 1.5);
  transform: translateZ(2rem);
  transition: transform var(--card-transition-duration)
    var(--card-transition-easing);
  .text {
    position: relative;
    font-family: "Montserrat";
    font-size: calc(var(--card-width) * var(--text-size-offset, 0.2));
    white-space: nowrap;
    color: #fff;
    width: fit-content;
  }

  .name,
  .location {
    text-transform: uppercase;
  }

  .location {
    font-weight: 800;
  }

  .location {
    --mg-left: 40px;
    --text-size-offset: 0.12;
    font-weight: 600;
    margin-left: var(--mg-left);
    margin-bottom: calc(var(--mg-left) / 2);
    padding-bottom: 0.8rem;
    &::before,
    &::after {
      content: "";
      position: absolute;
      background: #fff;
      left: 0%;
      transform: translate(calc(-1 * var(--mg-left)), -50%);
    }
    &::before {
      top: 50%;
      width: 20px;
      height: 5px;
    }
    &::after {
      bottom: 0;
      width: 60px;
      height: 2px;
    }
  }

  .description {
    --text-size-offset: 0.065;
    font-weight: 500;
  }

  &.current--info {
    opacity: 1;
    display: block;
  }
  &.previous--info,
  &.next--info {
    opacity: 0;
    display: none;
  }
}
</style>
