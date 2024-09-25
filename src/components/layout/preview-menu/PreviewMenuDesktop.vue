<template>
  <div class="iv-preview-menu-desktop">
    <div class="primary-list">
      <div
        v-for="(item, index) in menu"
        :key="index"
        class="item-wrapper"
        :class="{ selected: selectedItemIndex === index }"
        @click.stop="selectItem(index)"
      >
        <span class="item-text">
          {{ item.name }}
        </span>
      </div>
    </div>
    <div class="preview-container">
      <div class="preview-img-wrapper">
        <img :src="menu[selectedItemIndex].previewImgSrc" draggable="false" />
      </div>
      <div class="children-list">
        <div
          v-for="(childItem, index) in menu[selectedItemIndex].children"
          :key="index"
          class="item-wrapper"
          @click.stop="selectChildItem(index)"
        >
          <span class="item-text">
            {{ childItem.name }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useOverlay } from '@/composables/overlays/useOverlay';

const props = defineProps({
  menu: {
    type: Array,
  },
});

const router = useRouter();

const selectedItemIndex = ref(0);

const selectItem = (index) => {
  selectedItemIndex.value = index;
};

const selectChildItem = (index) => {
  const selectedChildRouteName = props?.menu[selectedItemIndex.value]?.children[index]?.routeName;
  if (selectedChildRouteName) {
    router.push({ name: selectedChildRouteName });
    useOverlay.closeOverlay();
  } else {
    console.log('Route name is not provided.');
  }
};
</script>

<style lang="scss" scoped>
.iv-preview-menu-desktop {
  width: 815px;
  height: 500px;

  padding: 0 40px 0 40px;

  display: flex;
  flex-direction: row;
  justify-content: center;

  font-weight: 600;
  text-transform: uppercase;

  .primary-list {
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

        .item-text {
          color: white;
        }
      }

      &:hover {
        .item-text {
          color: white;
        }
      }

      .item-text {
        font-size: 30px;
        color: rgba(255, 255, 255, 0.6);
      }
    }
  }

  .preview-container {
    width: 50%;

    margin: 0 0 0 20px;

    .preview-img-wrapper {
      margin: 0 0 20px 0;

      img {
        width: 300px;
        height: 300px;
      }
    }

    .children-list {
      text-transform: none;

      .item-wrapper {
        margin: 0 0 20px 0;

        cursor: pointer;

        &:hover {
          .item-text {
            color: white;
          }
        }

        .item-text {
          font-size: 20px;
          color: rgba(255, 255, 255, 0.6);
        }
      }
    }
  }
}
</style>
