<template>
  <div class="landing-page">
    <div class="section">
      <IVCarousel
        :carouselItemsInfo="carouselItemsInfo"
        :enableNextItemTimer="useLandingCarousel.isNextItemTimerEnabled"
        @itemSelected="showItemDetailsOverlay"
      />
    </div>
    <transition name="fade">
      <IVOverlay
        v-if="useOverlay.overlay && useOverlay.overlay.trigger === 'landingCarousel'"
        @close="closeItemDetailsOverlay"
      >
        <IVPlatformList
          dynamicSizePreset="landing"
          :title="useOverlay.overlay.title"
          :options="useOverlay.overlay.platforms"
          maxHeight="50vh"
        />
      </IVOverlay>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ivDiscographyData from '@/assets/data/iv-discography.js';
import IVCarousel from '@/components/widgets/IVCarousel.vue';
import IVOverlay from '@/components/widgets/IVOverlay.vue';
import IVPlatformList from '@/components/widgets/PlatformList.vue';
import { useLandingCarousel } from '@/composables/carousels/useLandingCarousel';
import { useLandingHeader } from '@/composables/headers/useLandingHeader';
import { useOverlay } from '@/composables/overlays/useOverlay';

// Filter items that have carousel feature flag enabled
const filteredIvDiscographyData = ivDiscographyData.filter((item) => item.feature.iv.carousel === true);
const carouselItemsInfo = ref(filteredIvDiscographyData);

const showItemDetailsOverlay = (itemIndex) => {
  useLandingCarousel.enableNextItemTimer(false);
  const selectedMusicInfo = carouselItemsInfo.value[itemIndex];
  useOverlay.updateOverlay(selectedMusicInfo, 'landingCarousel');
  useLandingHeader.updateHeaderAndFontColors(selectedMusicInfo.colors.primary, selectedMusicInfo.colors.font);
};

const closeItemDetailsOverlay = () => {
  useOverlay.closeOverlay();
  useLandingCarousel.enableNextItemTimer(true);
  useLandingHeader.resetHeaderAndFontColors();
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
