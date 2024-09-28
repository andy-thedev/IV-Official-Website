<template>
  <div
    class="iv-platform-table"
    :class="{ 'landing-dynamic': dynamicSizePreset === 'landing' }"
    :style="{ width: width }"
  >
    <div class="title">
      {{ title }}
    </div>
    <div class="title-border" />

    <div class="platforms-list-container" :style="{ 'max-height': maxHeight }">
      <div
        v-for="platform in platforms"
        :key="platform"
        class="platform-option-container"
        @click.stop="goToUrl(options[platform], platform)"
      >
        <div class="platform-option-wrapper" :style="{ width: optionInnerWidth }">
          <font-awesome-icon
            v-if="PlatformIconMapping[platform].type === 'fontawesome'"
            :icon="[PlatformIconMapping[platform].faType, PlatformIconMapping[platform].icon]"
            class="platform-icon"
          />
          <img
            v-else-if="PlatformIconMapping[platform].type === 'svg'"
            :src="PlatformIconMapping[platform].icon"
            class="platform-icon"
          />
          <div class="platform-text">{{ PlatformNameMapping[platform] }}</div>
        </div>
      </div>

      <div v-if="platforms.length === 0" class="platform-option-container remove-cursor-pointer">
        <div class="platform-option-wrapper" :style="{ width: optionInnerWidth }">
          <font-awesome-icon :icon="['fas', 'eye-slash']" class="platform-icon" />
          <div class="platform-text remove-nowrap">This track is no longer available</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { computed } from 'vue';

import {
  SupportedPlatforms,
  PlatformIconMapping,
  PlatformNameMapping,
  OrderedInnatePlatforms,
  LangOrderedPlatforms,
} from '@/lib/enums/platforms';

import { useGlobals } from '@/composables/useGlobals';

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  width: {
    type: String,
    default: '100%',
  },
  optionInnerWidth: {
    type: String,
    default: '50%',
  },
  maxHeight: {
    type: String,
    default: '100%',
  },
  options: {
    type: Object,
    default: () => ({}),
  },
  dynamicSizePreset: {
    type: String,
    default: '',
  },
});

const router = useRouter();

const platforms = computed(() => {
  return LangOrderedPlatforms[useGlobals.currLang].filter((platform) => props.options[platform]);
});

const goToUrl = (url, platform) => {
  if (OrderedInnatePlatforms.includes(SupportedPlatforms[platform])) {
    router.push({ name: url });
  } else {
    window.open(url, '_blank');
  }
};
</script>

<style lang="scss" scoped>
@mixin landing-dynamic-sizes {
  &.iv-platform-table {
    width: 21% !important;
  }

  @media (max-width: 1499px) {
    &.iv-platform-table {
      width: 35% !important;
    }
  }

  @media (max-width: 1199px) {
    &.iv-platform-table {
      width: 45% !important;
    }
  }

  @media (max-width: 899px) {
    &.iv-platform-table {
      width: 55% !important;
    }
  }

  @media (max-width: 599px) {
    &.iv-platform-table {
      width: 70% !important;
    }
    .title {
      font-size: 20px !important;
    }

    .platform-option-container {
      padding: 15px 0 15px 0 !important;
    }

    .platform-icon {
      width: 35px !important;
      height: 35px !important;
      font-size: 35px !important;
      margin-right: 20px !important;
    }

    .platform-text {
      font-size: 13px !important;
    }
  }

  @media (max-width: 299px) {
    .platform-option-wrapper {
      width: 70% !important;
    }

    .platform-icon {
      width: 30px !important;
      height: 30px !important;
      font-size: 30px !important;
    }

    .platform-option-container {
      padding: 10px 0 10px 0 !important;
    }
  }

  @media (max-width: 1280px) and (orientation: landscape) {
    &.iv-platform-table {
      width: 30% !important;
    }

    .title {
      font-size: 20px !important;
    }

    .platform-option-container {
      padding: 10px 0 10px 0 !important;
    }

    .platform-icon {
      width: 30px !important;
      height: 30px !important;
      font-size: 30px !important;
      margin-right: 20px !important;
    }

    .platform-text {
      font-size: 13px !important;
    }
  }
}

.landing-dynamic {
  @include landing-dynamic-sizes;
}

.remove-cursor-pointer {
  cursor: default !important;
}

.iv-platform-table {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: transparent;
  color: white;

  .title {
    font-size: 26px;
    text-transform: uppercase;
    font-weight: 700;
  }

  .title-border {
    width: 100%;
    border: white 1px solid;
    margin: 25px 0 0 0;
  }

  .platforms-list-container {
    width: 100%;
    overflow: scroll;
  }

  .platform-option-container {
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 22px 0 22px 0;
    border-bottom: rgb(255 255 255 / 0.2) solid 2px;

    cursor: pointer;

    .platform-option-wrapper {
      display: flex;
      align-items: center;

      .platform-icon {
        width: 35px;
        height: 35px;
        font-size: 35px;
        margin-right: 20px;
      }

      .platform-text {
        font-family: Raleway;
        font-weight: 700;
        font-size: 17px;
        white-space: nowrap;
        text-transform: uppercase;

        &.remove-nowrap {
          white-space: normal;
        }
      }
    }
  }
}
</style>
