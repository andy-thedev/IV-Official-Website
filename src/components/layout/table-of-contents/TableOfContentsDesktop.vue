<template>
  <div class="table-of-contents">
    <div class="content-container">
      <div class="primary-list">
        <div
          v-for="(item, index) in contentList"
          :key="index"
          class="item-container"
          :class="{ selected: selectedPrimaryItemIndex === index }"
          @click.stop="selectPrimaryItem(index)"
        >
          <div class="item-number-wrapper">
            <span class="item-number">{{ index + 1 }}.</span>
          </div>
          <div class="item-title-wrapper">
            <span v-if="useGlobals.currLang == SupportedLanguages.en">{{ item.title.en }}</span>
            <span v-else-if="useGlobals.currLang == SupportedLanguages.ko">{{ item.title.ko }}</span>
          </div>
        </div>
      </div>
      <div class="children-list">
        <div class="description-wrapper">
          <span
            v-if="useGlobals.currLang == SupportedLanguages.en"
            v-html="contentList[selectedPrimaryItemIndex].description.en"
          />
          <span
            v-else-if="useGlobals.currLang == SupportedLanguages.ko"
            v-html="contentList[selectedPrimaryItemIndex].description.ko"
          />
        </div>
        <div
          v-for="(item, index) in contentList[selectedPrimaryItemIndex].children"
          :key="index"
          class="item-container"
          :class="{ selected: selectedSecondaryItemIndex === index }"
          @click.stop="selectSecondaryItem(index)"
        >
          <div class="item-title-wrapper">
            <span v-if="useGlobals.currLang == SupportedLanguages.en">{{ item.title.en }}</span>
            <span v-else-if="useGlobals.currLang == SupportedLanguages.ko">{{ item.title.ko }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import SupportedLanguages from '@/lib/enums/lang.js';

import { useGlobals } from '@/composables/useGlobals.js';

const props = defineProps({
  contentList: {
    type: Array,
    default: () => [],
  },
  pagePrimaryIndex: {
    type: Number,
    default: 0,
  },
  pageSecondaryIndex: {
    type: Number,
    default: 0,
  },
});

const router = useRouter();

const selectedPrimaryItemIndex = ref(props.pagePrimaryIndex);
const selectedSecondaryItemIndex = ref(props.pageSecondaryIndex);

const selectPrimaryItem = (index) => {
  selectedPrimaryItemIndex.value = index;
};

const selectSecondaryItem = (index) => {
  const selectedChildRouteName = props?.contentList[selectedPrimaryItemIndex.value]?.children[index]?.routeName;
  if (!selectedChildRouteName) {
    console.log('Could not parse route name');
  } else if (index != props.pageSecondaryIndex) {
    router.push({ name: selectedChildRouteName });
  } else {
    // SNH - Do nothing
  }
};
</script>

<style lang="scss" scoped>
.table-of-contents {
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;

  font-family: 'Josefin Sans';

  .children-list {
    .description-wrapper {
      margin: 0 0 50px 0;

      font-size: 17px;
    }
  }

  .content-container {
    width: 100%;

    padding: 60px 0 60px 0;

    display: grid;
    grid-gap: 10px;
    grid-template-columns: 35% 65%;

    border-top: rgb(255 255 255 / 0.9) solid 1px;
    border-bottom: rgb(255 255 255 / 0.9) solid 1px;

    .item-container {
      display: flex;
      flex-direction: row;

      margin: 0 0 25px 0;

      font-size: 25px;
      font-weight: 600;

      color: rgba(255, 255, 255, 0.7);

      cursor: pointer;

      &:last-child {
        margin: 0;
      }

      &:hover {
        color: white;
      }

      &.selected {
        color: white;
      }

      .item-number-wrapper {
        width: 20px;

        margin: 0 40px 0 0;

        display: flex;
        justify-content: center;
        align-items: center;
      }

      .item-title-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>
