<template>
  <RouterView />
</template>

<script setup>
import { onBeforeUnmount, onMounted } from 'vue';
import { RouterView } from 'vue-router';

import { useGlobals } from '@/composables/useGlobals';

onMounted(() => {
  window.addEventListener('resize', useGlobals.onResize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', useGlobals.onResize);
});
</script>

<style scoped></style>
