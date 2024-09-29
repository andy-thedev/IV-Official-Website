<template>
  <div class="iv-preview-menu">
    <div class="iv-preview-menu-container">
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
.iv-preview-menu {
  height: 70%;
  width: 100%;
  overflow: auto;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .iv-preview-menu-container {
    width: 75%;
    height: 100%;

    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(2, 1fr);

    font-weight: 600;
    text-transform: uppercase;

    .primary-list {
      width: 100%;
      min-width: 0;

      position: relative;
      display: flex;
      flex-direction: column;
      align-items: end;
      justify-content: center;

      .item-wrapper {
        width: 100%;

        padding: 25px 25px;

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        border-bottom: rgb(255 255 255 / 0.2) solid 2px;

        &.selected {
          background-color: rgba(255, 255, 255, 0.1);
        }

        .item-text {
          font-size: 40px;
        }
      }
    }

    .preview-container {
      position: relative;
      min-width: 0;

      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: center;

      .children-list {
        width: 100%;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;

        .item-wrapper {
          width: 100%;

          padding: 25px 25px;

          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;

          border-bottom: rgb(255 255 255 / 0.2) solid 2px;

          .item-text {
            font-size: 40px;
            color: rgba(255, 255, 255, 0.7);
          }
        }
      }
    }
  }
}

@media (max-width: 1199px) {
  .iv-preview-menu {
    .iv-preview-menu-container {
      width: 90%;
      .primary-list {
        .item-wrapper {
          .item-text {
            font-size: 30px;
          }
        }
      }
      .preview-container {
        .children-list {
          .item-wrapper {
            .item-text {
              font-size: 30px;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 599px) {
  .iv-preview-menu {
    .iv-preview-menu-container {
      width: 90%;
      .primary-list {
        .item-wrapper {
          .item-text {
            font-size: 20px;
          }
        }
      }
      .preview-container {
        .children-list {
          .item-wrapper {
            .item-text {
              font-size: 20px;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 349px) {
  .iv-preview-menu {
    .iv-preview-menu-container {
      .primary-list {
        .item-wrapper {
          .item-text {
            font-size: 15px;
          }
        }
      }
      .preview-container {
        .children-list {
          .item-wrapper {
            .item-text {
              font-size: 15px;
            }
          }
        }
      }
    }
  }
}
</style>
