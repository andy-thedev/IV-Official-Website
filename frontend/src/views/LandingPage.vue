<template>
    <div class="landing-page">
        <div class="section">
            <IVCarousel
                :carouselItemsInfo="landingMusicArtworksInfo"
                :enableNextItemTimer="enableCarouselNextItemTimer"
                @item-selected="showItemDetailsOverlay"
            />
        </div>
        <transition name="fade">
            <IVOverlay
                v-if="selectedMusicInfo"
                @close="closeItemDetailsOverlay"
            >
                <IVPlatformList
                    width="25%"
                    :title="selectedMusicInfo.title"
                    :options="selectedMusicInfo.platforms"
                />
            </IVOverlay>
        </transition>
    </div>
</template>

<script>
// Components
import IVCarousel from '@/components/widgets/Carousel.vue';
import IVOverlay from '@/components/widgets/Overlay.vue';
import IVPlatformList from '@/components/widgets/PlatformList.vue';

// JSON file
import landingCarouselItemsData from '@/assets/data/landing-carousel-items-data.json';

export default {
    components: {
        IVCarousel,
        IVOverlay,
        IVPlatformList,
    },
    props: {
    },
    data() {
        return {
            // Carousel content details
            landingMusicArtworksInfo: landingCarouselItemsData.items,
            // Enables/disables auto-sliding of carousel items
            enableCarouselNextItemTimer: true,

            // Platform list overlay
            selectedMusicInfo: null,
        }
    },
    computed: {
    },
    created() {
    },
    methods: {
        showItemDetailsOverlay(itemIndex) {
            // Stop carousel items from auto-sliding
            this.enableCarouselNextItemTimer = false;
            // Show overlay with selected carousel item info
            this.selectedMusicInfo = this.landingMusicArtworksInfo[itemIndex];
        },
        closeItemDetailsOverlay() {
            // Hide overlay
            this.selectedMusicInfo = null;
            // Enable carousel auto-slide
            this.enableCarouselNextItemTimer = true;
        },
    },
}
</script>

<style lang="scss" scoped>
.landing-page {
    display: flex;
    flex-direction: column;

    width: 100vw;
}

.fade-enter-active {
    transition: all 0.5s ease-in-out;
}

.fade-leave-active {
    transition: all 0.5s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>