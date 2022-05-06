<template>
<div class="landing-page">
    <div class="section">
        <IVCarousel
            :carouselItemsInfo="landingCarouselItemsInfo"
        />
    </div>
    <div class="section recent-releases">
        <div class="primary-container">
            <div class="recent-releases-title">
                RECENT RELEASES
            </div>
            <IVTable
                :height="'600px'"
            />
        </div>
    </div>
</div>
</template>

<script>
import IVCarousel from '@/components/widgets/Carousel.vue';
import IVTable from '@/components/widgets/Table.vue';

export default {
    components: {
        IVCarousel,
        IVTable,
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

    .section {
        width: 100vw;
        height: 100vh;

        display: flex;
        justify-content: center;
        align-items: center;

        &.recent-releases {
            background-color: white;

            .recent-releases-title {
                font-size: 20px;
            }
        }
    }
}
</style>