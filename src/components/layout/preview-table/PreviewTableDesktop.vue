<template>
  <div class="iv-preview-table-desktop">
    <div class="items-list">
      <div
        v-for="(option, index) in options"
        :key="index"
        class="item-wrapper"
        :class="{ selected: selectedItemIndex === index }"
        @click.stop="selectItem(index)"
      >
        <span class="item-text">
          {{ option.name }}
        </span>
      </div>
    </div>
    <div class="preview-container">
      <div class="preview-img-wrapper">
        <img :src="options[selectedItemIndex].previewImgSrc" draggable="false" />
      </div>
      <div class="preview-text-wrapper">
        <div v-html="options[selectedItemIndex].previewText"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
  options: {
    type: Array,
  },
});

const selectedItemIndex = ref(0);

const selectItem = (index) => {
  selectedItemIndex.value = index;
};
</script>

<style lang="scss" scoped>
.iv-preview-table-desktop {
  width: 815px;
  height: 500px;

  padding: 0 40px 0 40px;

  display: flex;
  flex-direction: row;
  justify-content: center;

  font-weight: 600;
  text-transform: uppercase;

  .items-list {
    width: 50%;

    display: flex;
    flex-direction: column;
    align-items: center;

    .item-wrapper {
      width: 100%;

      padding: 25px 25px 25px 25px;

      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      border-bottom: rgb(255 255 255 / 0.2) solid 2px;

      cursor: pointer;

      &.selected {
        background-color: rgba(255, 255, 255, 0.1);
      }

      .item-text {
        font-size: 30px;
        color: white;
      }
    }
  }

  .preview-container {
    width: 50%;

    margin: 0 0 0 20px;

    .preview-img-wrapper {
      img {
        width: 300px;
        height: 300px;
      }
    }

    .preview-text-wrapper {
      text-transform: none;
    }
  }
}
</style>
