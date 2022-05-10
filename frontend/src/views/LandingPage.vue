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
                    dynamicSizePreset="landing"
                    :title="selectedMusicInfo.title"
                    :options="selectedMusicInfo.platforms"
                />
            </IVOverlay>
        </transition>
    </div>
</template>

<script>
// Store state management
import { store } from '@/store.js'
// JSON file
import landingCarouselItemsData from '@/assets/data/landing-carousel-items-data.json';

// Components
import IVCarousel from '@/components/widgets/Carousel.vue';
import IVOverlay from '@/components/widgets/Overlay.vue';
import IVPlatformList from '@/components/widgets/PlatformList.vue';

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
            store,

            // Carousel content details
            landingMusicArtworksInfo: landingCarouselItemsData.items,
            // Enables/disables auto-sliding of carousel items
            enableCarouselNextItemTimer: true,

            // Platform list overlay
            selectedMusicInfo: null,
        }
    },
    methods: {
        showItemDetailsOverlay(itemIndex) {
            // Stop carousel items from auto-sliding
            this.enableCarouselNextItemTimer = false;
            // Show overlay with selected carousel item info
            this.selectedMusicInfo = this.landingMusicArtworksInfo[itemIndex];
            // Change header color to artwork theme color
            const headerColor = this.landingMusicArtworksInfo[itemIndex].headerColor
            this.store.changeCurrentLandingHeaderColor(headerColor);
        },
        closeItemDetailsOverlay() {
            // Hide overlay
            this.selectedMusicInfo = null;
            // Enable carousel auto-slide
            this.enableCarouselNextItemTimer = true;
            // Reset header color to default
            this.store.changeCurrentLandingHeaderColor('');
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