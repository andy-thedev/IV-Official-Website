<template>
  <div class="iv-landing-wrapper">
    <IVLandingHeader
      :color="headerColor"
      :fontColor="headerFontColor"
      @selectedMembers="showMemberOverlay"
      @selectedMenu="showMenuOverlay"
      @close="closeOverlay"
    />
    <transition name="fade">
      <IVOverlay v-if="overlay && overlay.trigger === 'member'" @close="closeOverlay">
        <IVMembersMobileList :members="overlay.members" />
      </IVOverlay>
    </transition>
    <router-view />
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, reactive } from 'vue';
import { useStore } from 'vuex';
import commonVariables from '@/assets/data/common-variables.json';
import IVLandingHeader from '@/components/headers/LandingHeader.vue';
import IVOverlay from '@/components/widgets/IVOverlay.vue';
import IVMembersMobileList from '@/components/widgets/MembersMobileList.vue';

const RESIZE_WIDTH = 1281;
const LANDING_HEADER_OPAQUE_HEIGHT = 500;

const store = useStore();
const state = reactive({
  isMobile: window.innerWidth < RESIZE_WIDTH,
  membersList: commonVariables.members,
});

const headerColor = computed(() => store.state.landingHeader.headerColor);
const headerFontColor = computed(() => store.state.landingHeader.headerFontColor);
const overlay = computed(() => store.state.overlay.overlay);

const onScroll = () => {
  if (window.scrollY < LANDING_HEADER_OPAQUE_HEIGHT) {
    store.dispatch('landingHeader/updateHeaderColor', '');
  } else {
    store.dispatch('landingHeader/updateHeaderColor', 'black');
  }
};

const onResize = () => {
  const newIsMobile = window.innerWidth < RESIZE_WIDTH;
  if (state.isMobile !== newIsMobile) {
    state.isMobile = newIsMobile;
  }
};

const showMemberOverlay = () => {
  store.dispatch('carousel/updateEnableNextItemTimer', false);
  store.dispatch('landingHeader/updateHeaderColor', '');
  store.dispatch('landingHeader/updateHeaderFontColor', '');
  store.dispatch('overlay/updateOverlay', {
    members: state.membersList.map((member) => member.name),
    trigger: 'member',
  });
};

const showMenuOverlay = () => {
  store.dispatch('carousel/updateEnableNextItemTimer', false);
  store.dispatch('landingHeader/updateHeaderColor', '');
  store.dispatch('landingHeader/updateHeaderFontColor', '');
};

const closeOverlay = () => {
  store.dispatch('overlay/closeOverlay');
  store.dispatch('carousel/updateEnableNextItemTimer', true);
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
