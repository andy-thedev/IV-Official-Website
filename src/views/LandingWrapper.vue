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
      <IVOverlay v-if="useOverlay.overlay && useOverlay.overlay.trigger === 'member'" @close="closeOverlay">
        <IVMembersMobileList :members="useOverlay.overlay.members" />
      </IVOverlay>
    </transition>
    <router-view />
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, reactive } from 'vue';
import commonVariables from '@/assets/data/common-variables.json';
import IVLandingHeader from '@/components/headers/LandingHeader.vue';
import IVOverlay from '@/components/widgets/IVOverlay.vue';
import IVMembersMobileList from '@/components/widgets/MembersMobileList.vue';
import { useLandingCarousel } from '@/composables/carousels/useLandingCarousel';
import { useLandingHeader } from '@/composables/headers/useLandingHeader';
import { useOverlay } from '@/composables/overlays/useOverlay';

const RESIZE_WIDTH = 1281;
const LANDING_HEADER_OPAQUE_HEIGHT = 500;

const state = reactive({
  isMobile: window.innerWidth < RESIZE_WIDTH,
  membersList: commonVariables.members,
});

const onScroll = () => {
  if (window.scrollY < LANDING_HEADER_OPAQUE_HEIGHT) {
    useLandingHeader.updateHeaderColor('');
  } else {
    useLandingHeader.updateHeaderColor('black');
  }
};

const onResize = () => {
  const newIsMobile = window.innerWidth < RESIZE_WIDTH;
  if (state.isMobile !== newIsMobile) {
    state.isMobile = newIsMobile;
  }
};

const showMemberOverlay = () => {
  useLandingCarousel.enableNextItemTimer(false);
  useLandingHeader.resetHeaderAndFontColors();
  useOverlay.updateOverlay(
    {
      members: state.membersList.map((member) => member.name),
    },
    'member',
  );
};

const showMenuOverlay = () => {
  useLandingCarousel.enableNextItemTimer(false);
  useLandingHeader.resetHeaderAndFontColors();
};

const closeOverlay = () => {
  useOverlay.closeOverlay();
  useLandingCarousel.enableNextItemTimer(true);
};

onMounted(() => {
  window.addEventListener('scroll', onScroll);
  window.addEventListener('resize', onResize);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll);
  window.removeEventListener('resize', onResize);
});
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
