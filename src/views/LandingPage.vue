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

<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import landingCarouselItemsData from '@/assets/data/landing-carousel-items-data.json';
import IVCarousel from '@/components/widgets/IVCarousel.vue';
import IVOverlay from '@/components/widgets/IVOverlay.vue';
import IVPlatformList from '@/components/widgets/PlatformList.vue';

const store = useStore();

const landingMusicArtworksInfo = ref(landingCarouselItemsData.items);
const overlay = computed(() => store.state.overlay.overlay);
const enableNextItemTimer = computed(() => store.state.carousel.enableNextItemTimer);

const showItemDetailsOverlay = (itemIndex) => {
  store.dispatch('carousel/updateEnableNextItemTimer', false);
  const selectedMusicInfo = landingMusicArtworksInfo.value[itemIndex];
  store.dispatch('overlay/updateOverlay', {
    overlayInfo: selectedMusicInfo,
    trigger: 'landingCarousel',
  });
  store.dispatch('landingHeader/updateHeaderColor', selectedMusicInfo.headerColor);
  store.dispatch('landingHeader/updateHeaderFontColor', selectedMusicInfo.fontColor);
};

const closeItemDetailsOverlay = () => {
  store.dispatch('overlay/closeOverlay');
  store.dispatch('carousel/updateEnableNextItemTimer', true);
  store.dispatch('landingHeader/updateHeaderColor', '');
  store.dispatch('landingHeader/updateHeaderFontColor', '');
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
