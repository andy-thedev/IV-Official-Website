<template>
    <div
        class="carousel"
        :style="{
            'width': width,
            'height': height, 
        }"
    >
        <div class="carousel-inner">
            <div
                v-for="(carouselItem, i) in carouselItemsInfo"
                :key="i"
                class="carousel-item"
                :class="{ 'active': i == activeItemIndex }"
            >
                <img
                    :src="imgUrlToSrc(carouselItem.imageUrl)"
                />
            </div>
        </div>
        <!-- <div class="carousel-control left">
            <font-awesome-icon
                :icon="['fas', 'chevron-left']"
                class="arrow left"
            />
        </div>
        <div class="carousel-control right">
            <font-awesome-icon
                :icon="['fas', 'chevron-right']"
                class="arrow right"
            />
        </div>
        <ol class="carousel-indicators">
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
            activeItemIndex: 0,
        }
    },
    computed: {
    },
    created() {
    },
    methods: {
        imgUrlToSrc(imageUrl) {
            // NOTE: [05/03/22] Vue3 can't resolve alias when using :src
            // We must translate url manually
            const aliasTranslatedImageUrl = imageUrl.replace('@/', '../../');
            return new URL(aliasTranslatedImageUrl, import.meta.url).href
        }
    },
}
</script>

<style lang="scss" scoped>
.carousel {
    display: relative;
    background-color: black;

    .carousel-inner {
        // inherit props width/height
        width: 100%;
        height: 100%;

        .carousel-item {
            display: none;
            overflow: hidden;

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
}
</style>