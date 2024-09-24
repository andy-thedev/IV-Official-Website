<template>
  <div class="iv-landing-wrapper">
    <IVLandingHeader
      :color="useLandingHeader.headerColor"
      :fontColor="useLandingHeader.headerFontColor"
      @selectedMembers="showMemberOverlay"
      @selectedMenu="showMenuOverlay"
      @close="closeOverlay"
    />
    <transition name="fade">
      <IVOverlay
        v-if="useOverlay.overlay && (useOverlay.overlay.trigger === 'member' || useOverlay.overlay.trigger === 'menu')"
        @close="closeOverlay"
      >
        <!-- TODO: Remove members mobile list, and make preview menu use data innately -->
        <IVMembersMobileList v-if="useOverlay.overlay.trigger === 'member'" :members="useOverlay.overlay.members" />
        <IVPreviewMenu v-else-if="useOverlay.overlay.trigger === 'menu'" :menu="useOverlay.overlay.options" />
      </IVOverlay>
    </transition>
    <router-view />
  </div>
</template>

<script setup>
import { reactive } from 'vue';

import ivMembers from '@/assets/data/iv-members.json';
import ivMenu from '@/assets/data/iv-menu.js';

import { useLandingCarousel } from '@/composables/carousels/useLandingCarousel';
import { useLandingHeader } from '@/composables/headers/useLandingHeader';
import { useOverlay } from '@/composables/overlays/useOverlay';

import IVLandingHeader from '@/components/headers/LandingHeader.vue';
import IVOverlay from '@/components/widgets/IVOverlay.vue';
import IVMembersMobileList from '@/components/widgets/MembersMobileList.vue';
import IVPreviewMenu from '@/components/layout/preview-menu/PreviewMenu.vue';

const state = reactive({
  membersList: ivMembers,
  menuList: ivMenu,
});

const showMemberOverlay = () => {
  useLandingCarousel.enableNextItemTimer(false);
  useLandingHeader.resetHeaderAndFontColors();
  useOverlay.updateOverlay(
    {
      members: state.membersList,
    },
    'member',
  );
};

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
