<template>
  <div>
    <div class="cardList">
      <button class="cardList__btn btn btn--left">
        <!-- @click="swapCards('left')"-->
        <div class="icon">
          <svg>
            <use xlink:href="#arrow-left"></use>
          </svg>
        </div>
      </button>
      <div class="cards__wrapper">
        <div
          class="card"
          v-for="(item, index) in sharedData.cards"
          :key="index"
        >
          <div class="card__image">
            <img :src="item.imageSrc" alt="" />
          </div>
        </div>
      </div>
      <button class="cardList__btn btn btn--right">
        <!-- @click="swapCards('right')"-->
        <div class="icon">
          <svg>
            <use xlink:href="#arrow-right"></use>
          </svg>
        </div>
      </button>
    </div>
  </div>
</template>

<script>
import { sharedData } from "@/assets/data"

export default {
  name: "Accordian",
  data() {
    return {
      sharedData,
    }
  },
  methods: {
    // swapCards(direction) {
    //   this.changeInfo(direction)
    //   this.swapCardsClass(direction)
    //   this.removeCardEvents(document.querySelector(this.classStyle[0].card))
    // },
    swapCardsClass(direction = "") {
      if (direction === "left") {
        this.$store.commit("INCREAMENTTWO", 2)
        return classList[this.$store.state.currentCardIndex].card
      } else if (direction === "right") {
        this.$store.commit("INCREAMENTTWO", 1)
        return classList[this.$store.state.currentCardIndex].card
      } else if (direction == "") {
        this.$store.commit("INCREAMENTTWO", 0)
        return classList[this.$store.state.currentCardIndex].card
      }
    },
  },
}
</script>

<style scoped lang="scss">
button {
  border: none;
  background: none;
  cursor: pointer;
  &:focus {
    outline: none;
    border: none;
  }
}
.cardList {
  position: absolute;
  width: calc(3 * var(--card-width));
  height: auto;
  &__btn {
    --btn-size: 35px;
    width: var(--btn-size);
    height: var(--btn-size);
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 100;

    &.btn--left {
      left: -5%;
    }
    &.btn--right {
      right: -5%;
    }

    .icon {
      width: 100%;
      height: 100%;
      svg {
        width: 100%;
        height: 100%;
      }
    }
  }
  .cards__wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    perspective: 1000px;
  }
}

.card {
  //   --card-translateY-offset: 100vh;

  //   position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) translateX(var(--card-translateX-offset))
    translateY(var(--card-translateY-offset))
    rotateY(var(--card-rotation-offset)) scale(var(--card-scale-offset));
  display: inline-block;
  width: var(--card-width);
  height: var(--card-height);
  transition: transform var(--card-transition-duration)
    var(--card-transition-easing);
  user-select: none;

  //   &::before {
  //     content: "";
  //     position: absolute;
  //     left: 0;
  //     top: 0;
  //     width: 100%;
  //     height: 100%;
  //     background: #000;
  //     z-index: 1;
  //     transition: opacity var(--card-transition-duration)
  //       var(--card-transition-easing);
  //     opacity: calc(1 - var(--opacity));
  //   }

  &__image {
    position: relative;
    width: 100%;
    height: 100%;
    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &.current--card {
    --current-card-rotation-offset: 0;
    --card-translateX-offset: 0;
    --card-rotation-offset: var(--current-card-rotation-offset);
    --card-scale-offset: 1.2;
    --opacity: 0.8;
  }

  &.previous--card {
    --card-translateX-offset: calc(-1 * var(--card-width) * 1.1);
    --card-rotation-offset: 25deg;
  }

  &.next--card {
    --card-translateX-offset: calc(var(--card-width) * 1.1);
    --card-rotation-offset: -25deg;
  }

  &.previous--card,
  &.next--card {
    --card-scale-offset: 0.9;
    --opacity: 0.4;
  }
}
</style>
