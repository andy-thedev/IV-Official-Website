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
import { watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';

import ivMenu from '@/assets/data/iv-menu.js';

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
  const newHeaderColor = route?.meta?.headerColor;
  const newHeaderFontColor = route?.meta?.headerFontColor;

  useOverlay.closeOverlay();

  if (newHeaderColor && newHeaderFontColor) {
    useLandingHeader.updateHeaderAndFontColors(newHeaderColor, newHeaderFontColor);
  } else {
    useLandingHeader.resetHeaderAndFontColors();
  }

  useLandingCarousel.enableNextItemTimer(true);
};

watch(
  () => route.meta,
  (newMeta) => {
    const newHeaderColor = newMeta?.headerColor;
    const newHeaderFontColor = newMeta?.headerFontColor;

    if (newHeaderColor && newHeaderFontColor) {
      useLandingHeader.updateHeaderAndFontColors(newHeaderColor, newHeaderFontColor);
    } else {
      useLandingHeader.resetHeaderAndFontColors();
    }
  },
  { immediate: true },
);

const preloadImages = () => {
  ivMenu.forEach((menu) => {
    const img = new Image();
    img.src = menu.previewImgSrc;
  });
};

onMounted(() => {
  preloadImages();
});
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
