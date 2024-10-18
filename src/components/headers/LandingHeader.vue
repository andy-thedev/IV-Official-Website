<template>
  <div
    class="iv-landing-header"
    :style="{
      backgroundColor: color,
      color: fontColor,
    }"
  >
    <div class="left-items-container">
      <LangIcon />
    </div>
    <div class="center-brand" @click="selectBrand">
      <span class="center-text">INDIVISUAL</span>
    </div>
    <div class="right-items-container">
      <font-awesome-icon :icon="['fas', 'bars']" class="right-icon" @click="selectMenu" />
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

import { useOverlay } from '@/composables/overlays/useOverlay';

import LangIcon from '@/components/widgets/LangIcon.vue';

defineProps({
  color: {
    type: String,
    default: '',
  },
  fontColor: {
    type: String,
    default: '',
  },
});

const emit = defineEmits(['close', 'selectedMenu']);

const router = useRouter();

const selectMenu = () => {
  if (useOverlay.overlay && useOverlay.overlay.trigger === 'menu') {
    emit('close');
  } else {
    emit('selectedMenu');
  }
};

const selectBrand = () => {
  router.push({ name: 'LandingPage' });
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/common-variables';

@mixin menu-option-interaction {
  cursor: pointer;
  transition: $transition-landing-header-font-color;
  &:hover {
    color: $primary-color;
  }
}

.iv-landing-header {
  width: 100%;
  height: 65px;

  position: fixed;
  top: 0;
  right: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;

  z-index: $z-header;

  color: white;
  background-color: $background-color-landing-header;

  font-family: josefin sans, sans-serif;
  text-transform: uppercase;

  transition: $transition-landing-header-darken;

  .left-items-container {
    flex: 1;
    text-align: left;

    .iv-lang-icon {
      margin: 0 0 0 30px;

      font-size: 18px;

      cursor: pointer;

      transition: $transition-landing-header-font-color;
    }
  }

  .center-brand {
    cursor: pointer;

    .center-text {
      font-size: 22px;
      text-align: center;

      transition: $transition-landing-header-font-color;
    }
  }

  .right-items-container {
    flex: 1;

    text-align: right;

    .right-icon {
      margin: 0 30px 0 0;

      font-size: 18px;

      transition: $transition-landing-header-font-color;

      cursor: pointer;
    }
  }
}

@media (max-width: 480px) {
  .iv-landing-header {
    height: 75px;

    .center-brand {
      .center-text {
        font-size: 25px;
      }
    }
  }
}

@media (max-width: 349px) {
  .iv-landing-header {
    .center-brand {
      .center-text {
        font-size: 20px;
      }
    }

    .left-items-container {
      .iv-lang-icon {
        font-size: 14px;
      }
    }

    .right-items-container {
      .right-icon {
        font-size: 14px;
      }
    }
  }
}

@media (max-width: 250px) {
  .iv-landing-header {
    .center-brand {
      .center-text {
        font-size: 15px;
      }
    }

    .left-items-container {
      .iv-lang-icon {
        margin: 0 0 0 25px;

        font-size: 10px;
      }
    }

    .right-items-container {
      .right-icon {
        margin: 0 25px 0 0;

        font-size: 10px;
      }
    }
  }
}
</style>
