<template>
  <div class="publication-table-of-contents">
    <TableOfContents
      :contentList="tableOfContents"
      :pagePrimaryIndex="pagePrimaryIndex"
      :pageSecondaryIndex="pageSecondaryIndex"
    />
  </div>
</template>

<script setup>
import { publicationTOC } from '@/assets/data/iv-table-of-contents.js';

import TableOfContents from '@/components/layout/table-of-contents/TableOfContents.vue';

const props = defineProps({
  table: {
    type: String,
    default: 'youth',
    validator: (value) => {
      return ['youth'].includes(value);
    },
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

const tableOfContents = publicationTOC[props.table];
</script>

<style lang="scss" scoped></style>
