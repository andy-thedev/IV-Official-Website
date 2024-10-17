<template>
  <div class="table-of-contents">
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
    <transition name="fade">
      <IVOverlay
        v-if="useOverlay.overlay && useOverlay.overlay.trigger === 'tableOfContents'"
        @close="closeChildrenListOverlay"
      >
        <div class="children-list">
          <!-- Parent(primary) item title -->
          <div class="parent-title-wrapper">
            <span v-if="useGlobals.currLang == SupportedLanguages.en">{{
              contentList[selectedPrimaryItemIndex].title.en
            }}</span>
            <span v-else-if="useGlobals.currLang == SupportedLanguages.ko">{{
              contentList[selectedPrimaryItemIndex].title.ko
            }}</span>
          </div>

          <!-- Primary item description -->
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
          <!-- Children -->
          <div
            v-for="(item, index) in contentList[selectedPrimaryItemIndex].children"
            :key="index"
            class="item-container"
            :class="{ selected: selectedPrimaryItemIndex === pagePrimaryIndex && selectedSecondaryItemIndex === index }"
            @click.stop="selectSecondaryItem(index)"
          >
            <div class="item-title-wrapper">
              <span v-if="useGlobals.currLang == SupportedLanguages.en">{{ item.title.en }}</span>
              <span v-else-if="useGlobals.currLang == SupportedLanguages.ko">{{ item.title.ko }}</span>
            </div>
          </div>
        </div>
      </IVOverlay>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import SupportedLanguages from '@/lib/enums/lang.js';

import IVOverlay from '@/components/widgets/IVOverlay.vue';

import { useGlobals } from '@/composables/useGlobals.js';
import { useOverlay } from '@/composables/overlays/useOverlay';

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

  useOverlay.updateOverlay({}, 'tableOfContents');
};

const selectSecondaryItem = (index) => {
  const selectedChildRouteName = props?.contentList[selectedPrimaryItemIndex.value]?.children[index]?.routeName;
  if (!selectedChildRouteName) {
    console.log('Could not parse route name');
  } else if (selectedPrimaryItemIndex.value != props.pagePrimaryIndex || index != props.pageSecondaryIndex) {
    selectedSecondaryItemIndex.value = index;
    router.push({ name: selectedChildRouteName });
    useOverlay.closeOverlay();
  } else {
    // SNH - Do nothing
  }
};

const closeChildrenListOverlay = () => {
  useOverlay.closeOverlay();
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/presets/transition-presets';

.table-of-contents {
  @include fade-transition-preset;

  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;

  font-family: 'Josefin Sans';

  .primary-list {
    width: 100%;
  }

  .children-list {
    width: 50%;

    display: flex;
    flex-direction: column;
    align-items: center;

    .parent-title-wrapper {
      margin: 0 0 30px 0;

      display: flex;
      flex-direction: row;

      font-size: 40px;
      font-weight: 600;
      text-align: center;

      color: white;
    }

    .description-wrapper {
      margin: 0 0 70px 0;

      text-align: center;

      font-size: 17px;
    }
  }

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

@media (max-width: 800px) {
  .children-list {
    width: 60%;
  }
}

@media (max-width: 599px) {
  .table-of-contents {
    .children-list {
      width: 75%;
      .parent-title-wrapper {
        font-size: 30px;
      }
    }
  }
}

@media (max-width: 349px) {
  .table-of-contents {
    .children-list {
      width: 80%;

      .parent-title-wrapper {
        font-size: 25px;
      }

      .description-wrapper {
        font-size: 14px;
      }
    }

    .item-container {
      font-size: 22px;
    }
  }
}
</style>
