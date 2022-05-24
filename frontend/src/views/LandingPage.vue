<template>
    <div class="landing-page">
        <div class="section">
            <IVCarousel
                :carouselItemsInfo="landingMusicArtworksInfo"
                :enableNextItemTimer="store.enableCarouselNextItemTimer"
                @itemSelected="showItemDetailsOverlay"
            />
        </div>
        <transition name="fade">
            <IVOverlay
                v-if="
                    store.currentOverlay
                    && store.currentOverlay.trigger === 'landingCarousel'
                "
                @close="closeItemDetailsOverlay"
            >
                <IVPlatformList
                    dynamicSizePreset="landing"
                    :title="store.currentOverlay.title"
                    :options="store.currentOverlay.platforms"
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
        }
    },
    methods: {
        showItemDetailsOverlay(itemIndex) {
            // Stop carousel items from auto-sliding
            this.store.disableCarouselNextItemTimer();
            // Show overlay with selected carousel item info
            const selectedMusicInfo = this.landingMusicArtworksInfo[itemIndex];
            this.store.changeCurrentOverlay(selectedMusicInfo, 'landingCarousel');

            // Change header color to artwork theme color
            const headerColor = this.landingMusicArtworksInfo[itemIndex].headerColor;
            const fontColor = this.landingMusicArtworksInfo[itemIndex].fontColor;
            this.store.changeCurrentLandingHeaderColor(headerColor);
            this.store.changeCurrentLandingHeaderFontColor(fontColor);
        },
        closeItemDetailsOverlay() {
            // Hide overlay
            this.store.closeCurrentOverlay();
            // Enable carousel auto-slide
            this.store.activateCarouselNextItemTimer();
            // Reset header color to default
            this.store.changeCurrentLandingHeaderColor('');
            this.store.changeCurrentLandingHeaderFontColor('');
        },
    },
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/mixin-presets';

.landing-page {
    display: flex;
    flex-direction: column;

    width: 100vw;

    @include fade-transition-preset;
}
</style>