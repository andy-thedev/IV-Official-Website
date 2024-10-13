<template>
  <picture>
    <source :srcset="mobileSrc" media="(max-width: 1280px)" />
    <source :srcset="hdSrc" media="(max-width: 1920px)" />
    <source :srcset="qhdSrc" media="(max-width: 2560px)" />
    <source :srcset="fourkSrc" media="(min-width: 3840px)" />
    <slot></slot>
  </picture>
</template>

<script setup>
defineProps({
  fourkSrc: {
    type: String,
    default: '',
  },
  qhdSrc: {
    type: String,
    default: '',
  },
  hdSrc: {
    type: String,
    default: '',
  },
  mobileSrc: {
    type: String,
    default: '',
  },
});
</script>

<style lang="scss" scoped></style>
