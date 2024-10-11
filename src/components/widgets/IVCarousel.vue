<template>
  <div
    class="iv-carousel"
    :style="{
      width: width,
      height: height,
    }"
    v-touch:swipe.left="nextItem"
    v-touch:swipe.right="prevItem"
  >
    <!-- Carousel content -->
    <transition-group
      tag="div"
      :name="activeTransition"
      class="carousel-items-container"
      @after-enter="controlDisabled = false"
      @leave="controlDisabled = true"
    >
      <div
        v-for="(carouselItem, i) in carouselItemsInfo"
        v-show="i === activeItemIndex"
        :key="i"
        class="carousel-item-wrapper"
        v-touch:tap="handleItemSelected"
        @click="handleItemSelected"
      >
        <picture>
          <source :srcset="carouselItem.media.carousel['mobile']" media="(max-width: 1280)" />
          <source :srcset="carouselItem.media.carousel['hd']" media="(max-width: 1920px)" />
          <source :srcset="carouselItem.media.carousel['qhd']" media="(max-width: 2560px)" />
          <source :srcset="carouselItem.media.carousel['4k']" media="(min-width: 3840px)" />
          <img :src="carouselItem.media.carousel['original']" draggable="false" />
        </picture>
      </div>
    </transition-group>
    <!-- Left/right controls -->
    <button class="carousel-control-wrapper left unselectable" :disabled="controlDisabled" @click="prevItem">
      <font-awesome-icon :icon="['fas', 'chevron-left']" class="carousel-control-icon left" />
    </button>
    <button class="carousel-control-wrapper right unselectable" :disabled="controlDisabled" @click="nextItem">
      <font-awesome-icon :icon="['fas', 'chevron-right']" class="carousel-control-icon right" />
    </button>
    <!-- Carousel item indicators -->
    <div class="carousel-indicators-container">
      <!-- Dummy variable to start v-for index from 0 -->
      <font-awesome-icon
        v-for="(dummy, i) in carouselItemsInfo.length"
        :key="i"
        :icon="['fas', 'minus']"
        class="carousel-indicator"
        :class="{ active: i === activeItemIndex }"
        @click="goToItem(i)"
      />
    </div>
  </div>
</template>

<script>
const CAROUSEL_NEXT_ITEM_TIMER = 6000;

export default {
  components: {},
  props: {
    width: {
      type: String,
      default: '100%',
    },
    height: {
      type: String,
      default: '100vh',
    },
    carouselItemsInfo: {
      type: Array,
      default: () => [],
    },
    enableNextItemTimer: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      activeItemIndex: 0,
      activeTransition: '',

      controlDisabled: false,

      nextItemTimer: null,
    };
  },
  computed: {},
  watch: {
    enableNextItemTimer() {
      if (this.enableNextItemTimer) {
        this.startNextItemTimer();
      } else {
        this.clearNextItemTimer();
      }
    },
  },
  activated() {
    if (this.enableNextItemTimer) {
      this.startNextItemTimer();
    }
  },
  deactivated() {
    this.clearNextItemTimer();
  },
  mounted() {
    // Check if user is watching the carousel
    document.addEventListener('visibilitychange', this.handleVisibilityChange);

    if (this.enableNextItemTimer) {
      this.startNextItemTimer();
    }
  },
  beforeUnmount() {
    document.removeEventListener('visibilitychange', this.handleVisibilityChange);

    this.clearNextItemTimer();
  },
  methods: {
    /* To prevent bug where timer is causing animations to fire while user is not observing the page/carousel */
    handleVisibilityChange() {
      if (document.hidden) {
        // Page is hidden, stop the timer
        this.clearNextItemTimer();
      } else {
        // Page is visible, restart the timer
        this.resetNextItemTimer();
      }
    },
    startNextItemTimer() {
      this.nextItemTimer = setTimeout(() => {
        this.nextItem();
      }, CAROUSEL_NEXT_ITEM_TIMER);
    },
    clearNextItemTimer() {
      clearInterval(this.nextItemTimer);
      this.nextItemTimer = null;
    },
    resetNextItemTimer() {
      this.clearNextItemTimer();
      if (this.enableNextItemTimer) {
        this.startNextItemTimer();
      }
    },
    changeActiveItemIndex(n) {
      // Force index to be within bounds of [0, carouselItems.length)
      if (n > this.carouselItemsInfo.length - 1) {
        this.activeItemIndex = 0;
      } else if (n < 0) {
        this.activeItemIndex = this.carouselItemsInfo.length - 1;
      } else {
        this.activeItemIndex = n;
      }
    },
    prevItem() {
      this.activeTransition = 'to-left';
      this.changeActiveItemIndex(this.activeItemIndex - 1);
      this.resetNextItemTimer();
    },
    nextItem() {
      this.activeTransition = 'to-right';
      this.changeActiveItemIndex(this.activeItemIndex + 1);
      this.resetNextItemTimer();
    },
    goToItem(index) {
      if (index > this.activeItemIndex) {
        this.activeTransition = 'to-right';
        this.changeActiveItemIndex(index);
      } else if (index < this.activeItemIndex) {
        this.activeTransition = 'to-left';
        this.changeActiveItemIndex(index);
      } else {
        // do nothing
      }
    },
    handleItemSelected() {
      // In the landing page, the carousel item detail overlay should appear
      this.$emit('itemSelected', this.activeItemIndex);
    },
  },
};
</script>

<style lang="scss" scoped>
$color-inactive-transparent: rgb(255 255 255 / 0.4);
$color-active-opaque: rgb(255 255 255 / 1);

.iv-carousel {
  // Limit absolute positions in relative container
  position: relative;
  background-color: black;

  // Carousel content
  .carousel-items-container {
    // inherit props width/height
    width: 100%;
    height: 100%;

    .carousel-item-wrapper {
      /* Needed to trigger animation */
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;

      // inherit props width/height
      width: 100%;
      height: 100%;

      overflow: hidden;

      cursor: pointer;

      img {
        width: 100%;
        height: 100%;

        object-fit: cover;
        object-position: center;
      }
    }
  }

  // Left/right controls
  .carousel-control-wrapper {
    // Same effect as height 100%
    // Stretch clickable area across entire section height
    position: absolute;
    top: 0;
    bottom: 0;

    width: 15%;

    cursor: pointer;

    outline: none;
    background: transparent;
    border: none;

    &:hover .carousel-control-icon {
      color: $color-active-opaque;
    }

    &.left {
      left: 0;
    }

    &.right {
      right: 0;
    }

    .carousel-control-icon {
      // Center vertically
      position: absolute;
      top: 50%;
      transform: translateY(-50%);

      font-size: 32px;
      color: $color-inactive-transparent;

      -webkit-transition: color 0.2s;
      -moz-transition: color 0.2s;
      -ms-transition: color 0.2s;
      -o-transition: color 0.2s;
      transition: color 0.2s;

      &.left {
        left: 40%;
        transform: translate(-50%, -50%);
      }

      &.right {
        right: 40%;
        transform: translate(50%, -50%);
      }
    }
  }

  // Carousel item indicators
  .carousel-indicators-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    position: absolute;

    bottom: 25px;
    left: 50%;
    transform: translateX(-50%);

    .carousel-indicator {
      font-size: 20px;
      color: $color-inactive-transparent;
      margin: 0 2px 0 2px;

      cursor: pointer;

      &.active {
        color: $color-active-opaque;
      }
    }
  }
}

.to-left-enter-active {
  animation: slide-in-left 0.65s ease-in-out;
}

.to-left-leave-active {
  animation: slide-out-left 0.65s ease-in-out;
}

.to-right-enter-active {
  animation: slide-in-right 0.65s ease-in-out;
}

.to-right-leave-active {
  animation: slide-out-right 0.65s ease-in-out;
}

@keyframes slide-in-left {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes slide-out-left {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(100%);
  }
}

@keyframes slide-in-right {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes slide-out-right {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-100%);
  }
}
</style>
