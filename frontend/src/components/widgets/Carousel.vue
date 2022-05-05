<template>
    <div
        class="carousel"
        :style="{
            'width': width,
            'height': height, 
        }"
    >
        <transition-group
            tag="div"
            :name="activeTransition"
            class="carousel-inner"
        >
            <div
                v-for="(carouselItem, i) in carouselItems"
                v-show="i == activeItemIndex"
                :key="i"
                class="carousel-item"
            >
                <img
                    :src="carouselItem.imageSrc"
                />
            </div>
        </transition-group>
        <div
            class="carousel-control left"
            @click="prevItem"
        >
            <font-awesome-icon
                :icon="['fas', 'chevron-left']"
                class="arrow left"
            />
        </div>
        <div
            class="carousel-control right"
            @click="nextItem"
        >
            <font-awesome-icon
                :icon="['fas', 'chevron-right']"
                class="arrow right"
            />
        </div>
        <!-- <ol class="carousel-indicators">
            <li class="active" />
            <li />
            <li />
        </ol> -->
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
        }
    },
    computed: {
    },
    created() {
        this.carouselItems = this.carouselItemsInfo.map(carouselItemInfo => {
            return {
                imageSrc: this.imgUrlToSrc(carouselItemInfo.imageUrl),
            }
        })
    },
    methods: {
        imgUrlToSrc(imageUrl) {
            // NOTE: [05/03/22] Vue3 can't resolve alias when using :src
            // We must translate url manually
            const aliasTranslatedImageUrl = imageUrl.replace('@/', '../../');
            return new URL(aliasTranslatedImageUrl, import.meta.url).href
        },
        changeActiveItemIndex(n) {
            if (n > this.carouselItems.length - 1) {
                this.activeItemIndex = 0;
            } else if (n < 0) {
                this.activeItemIndex = this.carouselItems.length - 1;
            } else {
                this.activeItemIndex = n;
            }
        },
        prevItem() {
            this.changeActiveItemIndex(this.activeItemIndex - 1);
            this.activeTransition = 'to-left'
        },
        nextItem() {
            this.changeActiveItemIndex(this.activeItemIndex + 1);
            this.activeTransition = 'to-right'
        },
    },
}
</script>

<style lang="scss" scoped>
.carousel {
    // Limit absolute positions in relative container
    position: relative;
    background-color: black;

    .carousel-inner {
        // inherit props width/height
        width: 100%;
        height: 100%;

        .carousel-item {
            /* display: none; */
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

            &.active {
                display: block;
            }

            img {
                // inherit props width/height
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }

    .carousel-control {
        // Same effect as height 100%
        // Stretch clickable area across entire section height
        position: absolute;
        top: 0;
        bottom: 0;

        width: 20%;

        cursor: pointer;

        &.left {
            left: 0;
        }

        &.right {
            right: 0;
        }

        .arrow {
            // Center vertically
            position: absolute;
            top: 50%;
            transform: translateY(-50%);

            font-size: 32px;
            color: rgb(255 255 255 / 0.4);

            cursor: pointer;

            -webkit-transition: color 0.2s;
            -moz-transition:    color 0.2s;
            -ms-transition:     color 0.2s;
            -o-transition:      color 0.2s;
            transition:         color 0.2s;

            &:hover {
                color: rgb(255 255 255 / 1);
            }

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
}

.to-left-enter-active {
    animation: slide-in-left 0.63s ease-in-out;
}

.to-left-leave-active {
    animation: slide-out-left 0.63s ease-in-out;
}

.to-right-enter-active {
    animation: slide-in-right 0.63s ease-in-out;
}

.to-right-leave-active {
    animation: slide-out-right 0.63s ease-in-out;
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