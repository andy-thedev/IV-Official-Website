<template>
  <div class="iv-overlay" @click="close">
    <!-- <font-awesome-icon
      :icon="['fas', 'xmark']"
      class="close-icon"
      @click.stop="close"
    /> -->
    <slot></slot>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

defineProps({
  type: {
    type: String,
    default: '',
  },
});

const emit = defineEmits(['close']);

function close() {
  emit('close');
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/common-variables';

.iv-overlay {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: $z-under-header;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(2, 1, 0, 0.82);
  color: white;
}

.close-icon {
  font-size: 25px;
  position: absolute;
  top: 75px;
  left: 15px;
  padding: 20px 20px;
  cursor: pointer;
}
</style>
