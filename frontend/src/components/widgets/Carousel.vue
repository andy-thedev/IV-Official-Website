<template>
    <div
        class="iv-carousel"
        :style="{
            'width': width,
            'height': height, 
        }"
    >
        <!-- Carousel content -->
        <transition-group
            tag="div"
            :name="activeTransition"
            class="carousel-items-container"
            @after-enter="controlDisabled=false"
            @leave="controlDisabled=true"
        >
            <div
                v-for="(carouselItem, i) in carouselItems"
                v-show="i === activeItemIndex"
                :key="i"
                class="carousel-item-wrapper"
            >
                <img
                    v-if="carouselItem.type === 'img'"
                    :src="carouselItem.imageSrc"
                    draggable="false"
                />
            </div>
        </transition-group>
        <!-- Left/right controls -->
        <button
            class="carousel-control-wrapper left unselectable"
            :disabled="controlDisabled"
            @click="prevItem"
        >
            <font-awesome-icon
                :icon="['fas', 'chevron-left']"
                class="carousel-control-icon left"
            />
        </button>
        <button
            class="carousel-control-wrapper right unselectable"
            :disabled="controlDisabled"
            @click="nextItem"
        >
            <font-awesome-icon
                :icon="['fas', 'chevron-right']"
                class="carousel-control-icon right"
            />
        </button>
        <!-- Carousel item indicators -->
        <div class="carousel-indicators-container">
            <!-- Dummy variable to start v-for index from 0 -->
            <font-awesome-icon
                v-for="(dummy, i) in carouselItems.length"
                :key="i"
                :icon="['fas', 'minus']"
                class="carousel-indicator"
                :class="{ 'active': i === activeItemIndex }"
                @click="goToItem(i)"
            />
        </div>
    </div>
</template>

<script>
export default {
    components: {
    },
    props: {
        width: {
            type: String,
            default: '100vw',
        },
        height: {
            type: String,
            default: '100vh',
        },
        carouselItemsInfo: {
            type: Array,
            default: [],
        },
    },
    data() {
        return {
            carouselItems: [],

            activeItemIndex: 0,
            activeTransition: '',

            controlDisabled: false,

            nextCarouselTimer: null,
        }
    },
    computed: {
    },
    created() {
        // Convert basic carousel items info into usable format
        this.carouselItems = this.carouselItemsInfo.map(carouselItemInfo => {
            if (carouselItemInfo.type === 'img') {
                return {
                    type: 'img',
                    imageSrc: this.imgUrlToSrc(carouselItemInfo.imageUrl),
                }
            } else {
                // should not occur
            }
        });
    },
    mounted() {
        this.startNextCarouselTimer();
    },
    beforeDestroy() {
        this.clearNextCarouselTimer();
    },
    methods: {
        startNextCarouselTimer() {
            this.nextCarouselTimer = setInterval(() => {
                this.nextItem();
            }, 4000);
        },
        clearNextCarouselTimer() {
            clearInterval(this.nextCarouselTimer);
        },
        resetNextCarouselTimer() {
            this.clearNextCarouselTimer();
            this.startNextCarouselTimer();
        },
        imgUrlToSrc(imageUrl) {
            // NOTE: [05/03/22] Vue3 can't resolve alias when using :src
            // We must translate url manually
            const aliasTranslatedImageUrl = imageUrl.replace('@/', '../../');
            return new URL(aliasTranslatedImageUrl, import.meta.url).href;
        },
        changeActiveItemIndex(n) {
            // Force index to be within bounds of [0, carouselItems.length)
            if (n > this.carouselItems.length - 1) {
                this.activeItemIndex = 0;
            } else if (n < 0) {
                this.activeItemIndex = this.carouselItems.length - 1;
            } else {
                this.activeItemIndex = n;
            }
        },
        prevItem() {
            this.activeTransition = 'to-left';
            this.changeActiveItemIndex(this.activeItemIndex - 1);
            this.resetNextCarouselTimer();
        },
        nextItem() {
            this.activeTransition = 'to-right';
            this.changeActiveItemIndex(this.activeItemIndex + 1);
            this.resetNextCarouselTimer();
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
    },
}
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
            overflow: hidden;

            /* Needed to trigger animation */
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;

            // inherit props width/height
            width: 100%;
            height: 100%;

            background-size: cover!important;
            -webkit-background-size: cover!important;
            -moz-background-size: cover!important;
            -o-background-size: cover!important;
            background-position: center!important;

            img {
                // inherit props width/height
                width: 100%;
                height: 100%;
                object-fit: cover;
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

        width: 20%;

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
            -moz-transition:    color 0.2s;
            -ms-transition:     color 0.2s;
            -o-transition:      color 0.2s;
            transition:         color 0.2s;

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
    animation: slide-in-left 0.61s ease-in-out;
}

.to-left-leave-active {
    animation: slide-out-left 0.61s ease-in-out;
}

.to-right-enter-active {
    animation: slide-in-right 0.61s ease-in-out;
}

.to-right-leave-active {
    animation: slide-out-right 0.61s ease-in-out;
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