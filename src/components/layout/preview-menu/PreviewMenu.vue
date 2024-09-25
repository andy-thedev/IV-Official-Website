<template>
  <div class="iv-preview-menu">
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
.iv-preview-menu {
  height: 70%;
  width: 70%;
  overflow: auto;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
