<template>
  <div class="iv-landing-wrapper">
    <IVLandingHeader
      :color="useLandingHeader.headerColor"
      :fontColor="useLandingHeader.headerFontColor"
      @selectedMenu="showMenuOverlay"
      @close="closeOverlay"
    />
    <transition name="fade">
      <IVOverlay
        v-if="useOverlay.overlay && (useOverlay.overlay.trigger === 'member' || useOverlay.overlay.trigger === 'menu')"
        @close="closeOverlay"
      >
        <!-- TODO: Make preview menu use data innately -->
        <IVPreviewMenu v-if="useOverlay.overlay.trigger === 'menu'" :menu="useOverlay.overlay.options" />
      </IVOverlay>
    </transition>
    <router-view />
  </div>
</template>

<script setup>
import { reactive } from 'vue';

import ivMenu from '@/assets/data/iv-menu.js';

import { useLandingCarousel } from '@/composables/carousels/useLandingCarousel';
import { useLandingHeader } from '@/composables/headers/useLandingHeader';
import { useOverlay } from '@/composables/overlays/useOverlay';

import IVLandingHeader from '@/components/headers/LandingHeader.vue';
import IVOverlay from '@/components/widgets/IVOverlay.vue';
import IVPreviewMenu from '@/components/layout/preview-menu/PreviewMenu.vue';

const state = reactive({
  menuList: ivMenu,
});

const showMenuOverlay = () => {
  useLandingCarousel.enableNextItemTimer(false);
  useLandingHeader.resetHeaderAndFontColors();
  useOverlay.updateOverlay(
    {
      options: state.menuList,
    },
    'menu',
  );
};

const closeOverlay = () => {
  useOverlay.closeOverlay();
  useLandingCarousel.enableNextItemTimer(true);
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/mixin-presets';

.iv-landing-wrapper {
  width: 100vw;
  display: flex;
  flex-direction: column;
  @include fade-transition-preset;
}
</style>
