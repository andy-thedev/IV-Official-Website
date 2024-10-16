<template>
  <div class="youth-table-of-contents">
    <TableOfContents
      :contentList="tableOfContents"
      :pagePrimaryIndex="pagePrimaryIndex"
      :pageSecondaryIndex="pageSecondaryIndex"
    />
  </div>
</template>

<script setup>
defineProps({
  pagePrimaryIndex: {
    type: Number,
    default: 0,
  },
  pageSecondaryIndex: {
    type: Number,
    default: 0,
  },
});

import TableOfContents from '@/components/layout/table-of-contents/TableOfContents.vue';

const tableOfContents = [
  {
    title: 'INTRODUCTION',
    description: `An introduction to a collection of tracks that explore the raw emotions of becoming an "adult" in a chaotic age. <br /> In a world that constantly races forward, an album buried amidst an anarchy of pursuit offers a rare pause.`,
    children: [
      {
        title: 'ABSTRACT',
        routeName: 'YouthPublication',
      },
      {
        title: 'IMMERSION',
        routeName: 'YouthIntroductionImmersion',
      },
    ],
  },
  {
    title: 'HOW IT ALL BEGAN',
    description: 'Art, nicotine, a 70 dollar microphone, and a reckless dive into the other side of the world.',
    children: [
      {
        title: '4 YEARS AGO',
        routeName: 'YouthHowItAllBegan',
      },
    ],
  },
];
</script>

<style lang="scss" scoped></style>
