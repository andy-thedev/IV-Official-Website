<template>
  <div class="iv-landing-wrapper">
    <IVLandingHeader
      :color="useLandingHeader.headerColor"
      :fontColor="useLandingHeader.headerFontColor"
      @selectedMenu="showMenuOverlay"
      @close="closeOverlay"
    />
    <transition name="fade">
      <IVOverlay v-if="useOverlay.overlay && useOverlay.overlay.trigger === 'menu'" @close="closeOverlay">
        <IVPreviewMenu v-if="useOverlay.overlay.trigger === 'menu'" />
      </IVOverlay>
    </transition>
    <router-view />
  </div>
</template>

<script setup>
import { watch, ref } from 'vue';
import { useRoute } from 'vue-router';

import { useLandingCarousel } from '@/composables/carousels/useLandingCarousel';
import { useLandingHeader } from '@/composables/headers/useLandingHeader';
import { useOverlay } from '@/composables/overlays/useOverlay';

import IVLandingHeader from '@/components/headers/LandingHeader.vue';
import IVOverlay from '@/components/widgets/IVOverlay.vue';
import IVPreviewMenu from '@/components/layout/preview-menu/PreviewMenu.vue';

const route = useRoute();

const showMenuOverlay = () => {
  useLandingCarousel.enableNextItemTimer(false);
  useLandingHeader.resetHeaderAndFontColors();
  useOverlay.updateOverlay({}, 'menu');
};

const closeOverlay = () => {
  useOverlay.closeOverlay();
  useLandingCarousel.enableNextItemTimer(true);
};

watch(
  () => route.meta,
  (newMeta) => {
    const newHeaderColor = newMeta?.headerColor;
    const newHeaderFontColor = newMeta?.headerFontColor;

    if (newHeaderColor && newHeaderFontColor) {
      useLandingHeader.updateHeaderAndFontColors(newMeta.headerColor, newMeta.headerFontColor);
    } else {
      useLandingHeader.resetHeaderAndFontColors();
    }
  },
  { immediate: true },
);
</script>

<style lang="scss" scoped>
@import '@/assets/css/presets/transition-presets';

.iv-landing-wrapper {
  width: 100vw;
  display: flex;
  flex-direction: column;
  @include fade-transition-preset;
}
</style>
