<template>
  <div class="iv-lang-icon unselectable-text" @click="useGlobals.changeCurrLang()">
    {{ useGlobals.currLang }}
  </div>
</template>

<script setup>
import { useGlobals } from '@/composables/useGlobals';
</script>

<style lang="scss" scoped>
@import '@/assets/css/common-variables';
@import '@/assets/css/common-styles';

.iv-lang-icon {
  width: 20px;
  height: 20px;

  margin: 0 0 0 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
}
</style>
