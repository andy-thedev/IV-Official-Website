<template>
  <RouterView />
</template>

<script setup>
import { onBeforeUnmount, onMounted } from 'vue';
import { RouterView } from 'vue-router';

import { useGlobals } from '@/composables/useGlobals';
import { useLandingHeader } from '@/composables/headers/useLandingHeader';

const LANDING_HEADER_OPAQUE_HEIGHT = 500;

const onScroll = () => {
  if (window.scrollY < LANDING_HEADER_OPAQUE_HEIGHT) {
    useLandingHeader.updateHeaderColor('');
  } else {
    useLandingHeader.updateHeaderColor('black');
  }
};

onMounted(() => {
  window.addEventListener('resize', useGlobals.onResize);
  window.addEventListener('scroll', onScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', useGlobals.onResize);
  window.removeEventListener('scroll', onScroll);
});
</script>

<style scoped></style>
