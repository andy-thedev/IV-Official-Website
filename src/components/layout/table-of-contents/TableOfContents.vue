<template>
  <div class="table-of-contents-wrapper">
    <TableOfContentsMobile
      v-if="useGlobals.isMobile"
      :contentList="contentList"
      :pagePrimaryIndex="pagePrimaryIndex"
      :pageSecondaryIndex="pageSecondaryIndex"
    />
    <TableOfContentsDesktop
      v-else
      :contentList="contentList"
      :pagePrimaryIndex="pagePrimaryIndex"
      :pageSecondaryIndex="pageSecondaryIndex"
    />
  </div>
</template>

<script setup>
defineProps({
  contentList: {
    type: Array,
    default: () => [],
  },
  pagePrimaryIndex: {
    type: Number,
    default: 0,
  },
  pageSecondaryIndex: {
    type: Number,
    default: 0,
  },
});

import { useGlobals } from '@/composables/useGlobals';

import TableOfContentsDesktop from '@/components/layout/table-of-contents/TableOfContentsDesktop.vue';
import TableOfContentsMobile from '@/components/layout/table-of-contents/TableOfContentsMobile.vue';
</script>

<style lang="scss" scoped></style>
