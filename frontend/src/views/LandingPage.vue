<template>
<div class="landing-page">
    <IVCarousel
        :carouselItemsInfo="landingCarouselItemsInfo"
    />
</div>
</template>

<script>
import IVCarousel from '@/components/widgets/Carousel.vue';

export default {
components: {
    IVCarousel
},
props: {
},
data() {
    return {
        landingCarouselItemsInfo: [
            {
                type: 'img',
                imageUrl: '@/assets/img/last-dance.jpg'
            },
            {
                type: 'img',
                imageUrl: '@/assets/img/left-over.jpg'
            },
            {
                type: 'img',
                imageUrl: '@/assets/img/collection.jpg'
            },
            {
                type: 'img',
                imageUrl: '@/assets/img/passenger-seat.jpg'
            },
            {
                type: 'img',
                imageUrl: '@/assets/img/pdg-project-2019.jpg'
            },
            {
                type: 'img',
                imageUrl: '@/assets/img/fly.jpg'
            },
            {
                type: 'img',
                imageUrl: '@/assets/img/lately.jpg'
            },
        ],
    }
},
computed: {
},
created() {
},
methods: {
},
}
</script>

<style lang="scss" scoped>
.landing-page {
    display: flex;
    flex-direction: column;

    width: 100vw;
}

.landing-carousel-section {
width: 100vw;
}
</style>