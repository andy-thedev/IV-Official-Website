<template>
  <div class="iv-preview-table">
    <IVPreviewTableMobile v-if="useGlobals.isMobile" :options="options" />
    <IVPreviewTableDesktop v-else :options="options" />
  </div>
</template>

<script setup>
import { useGlobals } from '@/composables/useGlobals';

import IVPreviewTableMobile from '@/components/layout/preview-table/PreviewTableMobile.vue';
import IVPreviewTableDesktop from '@/components/layout/preview-table/PreviewTableDesktop.vue';

defineProps({
  options: {
    type: Array,
  },
});
</script>

<style lang="scss" scoped>
.iv-preview-table {
  height: 70%;
  width: 70%;
  overflow: auto;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
