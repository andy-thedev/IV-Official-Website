<template>
  <div class="discography-details">
    <DiscographyDetailsMobile v-if="useGlobals.isMobile" />
    <DiscographyDetailsDesktop v-else />
  </div>
</template>

<script setup>
import { useGlobals } from '@/composables/useGlobals';

import DiscographyDetailsMobile from '@/views/discography/details/DiscographyDetailsMobile.vue';
import DiscographyDetailsDesktop from '@/views/discography/details/DiscographyDetailsDesktop.vue';
</script>

<style lang="scss" scoped></style>
