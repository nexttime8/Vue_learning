<template>
  <div>
    <div class="app_bg">
      <div
        class="app_bg_image"
        :class="item.bg"
        v-for="(item, index) in sharedData.cards"
        :key="index"
      >
        <img :src="item.imageSrc" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { sharedData } from "@/assets/data"
export default {
  name: "Background",
  data() {
    return {
      sharedData,
    }
  },
}
</script>

<style lang="scss" scoped>
.app_bg {
  // position: absolute;
  width: 100%;
  height: 100%;
  z-index: -5;
  filter: blur(8px);
  pointer-events: none;
  user-select: none;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #000;
    z-index: 1;
    opacity: 0.8;
  }

  &_image {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%)
      translateX(var(--image-translate-offset, 0));
    width: 180%;
    height: 180%;
    transition: transform 1000ms ease, opacity 1000ms ease;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    &.current--image {
      opacity: 1;
      --image-translate-offset: 0;
    }
    &.previous--image,
    &.next--image {
      opacity: 0;
    }
    &.previous--image {
      --image-translate-offset: -25%;
    }
    &.next--image {
      --image-translate-offset: 25%;
    }
  }
}
</style>
