<template>
  <div class="iv-preview-menu">
    <IVPreviewMenuMobile v-if="useGlobals.isMobile" :menu="menu" />
    <IVPreviewMenuDesktop v-else :menu="menu" />
  </div>
</template>

<script setup>
import { useGlobals } from '@/composables/useGlobals';

import IVPreviewMenuMobile from '@/components/layout/preview-menu/PreviewMenuMobile.vue';
import IVPreviewMenuDesktop from '@/components/layout/preview-menu/PreviewMenuDesktop.vue';

defineProps({
  menu: {
    type: Array,
  },
});
</script>

<style lang="scss" scoped>
.iv-preview-menu {
  height: 70%;
  width: 70%;
  overflow: auto;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
