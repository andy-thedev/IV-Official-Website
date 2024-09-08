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

    <div
      v-for="platform in platforms"
      :key="platform"
      class="platform-option-container"
      @click.stop="goToUrl(options[platform])"
    >
      <div class="platform-option-wrapper">
        <font-awesome-icon :icon="['fab', platformIcon(platform)]" class="platform-icon" />
        <div class="platform-text">{{ platformName(platform) }}</div>
      </div>
    </div>

    <div v-if="platforms.length === 0" class="platform-option-container remove-cursor-pointer">
      <div class="platform-option-wrapper">
        <font-awesome-icon :icon="['fas', 'eye-slash']" class="platform-icon" />
        <div class="platform-text remove-nowrap">This track is no longer available</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  width: {
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

// Reactive references for data properties and computed values
const platforms = computed(() => Object.keys(props.options));

// Method defined in setup
const goToUrl = (url) => {
  window.open(url, '_blank');
};

// Helper method for formatting platform names
const platformName = (name) => {
  switch (name) {
    case 'youtube':
      return 'Youtube';
    case 'spotify':
      return 'Spotify';
    case 'appleMusic':
      return 'Apple Music';
    case 'soundcloud':
      return 'Soundcloud';
    case 'deezer':
      return 'Deezer';
    case 'amazonMusic':
      return 'Amazon Music';
    default:
      return name.charAt(0).toUpperCase() + name.slice(1);
  }
};

const platformIcon = (name) => {
  switch (name) {
    case 'youtube':
      return 'youtube';
    case 'spotify':
      return 'spotify';
    case 'appleMusic':
      return 'apple';
    case 'soundcloud':
      return 'soundcloud';
    case 'deezer':
      return 'deezer';
    case 'amazonMusic':
      return 'amazon';
    default:
      return 'headphones-alt';
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/mixin-presets';

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

    font-family: Josefin Sans;
    font-weight: 700;
  }

  .title-border {
    width: 100%;
    border: white 1px solid;
    margin: 25px 0 0 0;
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
      width: 50%;

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
