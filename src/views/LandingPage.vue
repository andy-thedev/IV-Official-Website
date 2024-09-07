<template>
  <div class="landing-page">
    <div class="section">
      <IVCarousel
        :carouselItemsInfo="landingMusicArtworksInfo"
        :enableNextItemTimer="enableNextItemTimer"
        @itemSelected="showItemDetailsOverlay"
      />
    </div>
    <transition name="fade">
      <IVOverlay v-if="overlay && overlay.trigger === 'landingCarousel'" @close="closeItemDetailsOverlay">
        <IVPlatformList dynamicSizePreset="landing" :title="overlay.title" :options="overlay.platforms" />
      </IVOverlay>
    </transition>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

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
  props: {},
  data() {
    return {
      // Carousel content details
      landingMusicArtworksInfo: landingCarouselItemsData.items,
    };
  },
  computed: {
    ...mapState('overlay', ['overlay']),
    ...mapState('carousel', ['enableNextItemTimer']),
  },
  methods: {
    ...mapActions('landingHeader', ['updateHeaderColor', 'updateHeaderFontColor']),
    ...mapActions('overlay', ['updateOverlay', 'closeOverlay']),
    ...mapActions('carousel', ['updateEnableNextItemTimer']),
    showItemDetailsOverlay(itemIndex) {
      // Stop carousel items from auto-sliding
      this.updateEnableNextItemTimer(false);
      // Show overlay with selected carousel item info
      const selectedMusicInfo = this.landingMusicArtworksInfo[itemIndex];
      this.updateOverlay({ overlayInfo: selectedMusicInfo, trigger: 'landingCarousel' });

      // Change header color to artwork theme color
      const headerColor = this.landingMusicArtworksInfo[itemIndex].headerColor;
      const fontColor = this.landingMusicArtworksInfo[itemIndex].fontColor;
      this.updateHeaderColor(headerColor);
      this.updateHeaderFontColor(fontColor);
    },
    closeItemDetailsOverlay() {
      // Hide overlay
      this.closeOverlay();
      // Enable carousel auto-slide
      this.updateEnableNextItemTimer(true);
      // Reset header color to default
      this.updateHeaderColor('');
      this.updateHeaderFontColor('');
    },
  },
};
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
