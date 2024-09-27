<template>
  <div class="iv-preview-menu-wrapper">
    <IVPreviewMenuMobile v-if="useGlobals.isMobile" :menu="ivMenu" />
    <IVPreviewMenuDesktop v-else :menu="ivMenu" />
  </div>
</template>

<script setup>
import ivMenu from '@/assets/data/iv-menu.js';

import { useGlobals } from '@/composables/useGlobals';

import IVPreviewMenuMobile from '@/components/layout/preview-menu/PreviewMenuMobile.vue';
import IVPreviewMenuDesktop from '@/components/layout/preview-menu/PreviewMenuDesktop.vue';
</script>

<style lang="scss" scoped>
.iv-preview-menu-wrapper {
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
