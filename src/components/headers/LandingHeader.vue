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
import { useOverlay } from '@/composables/overlays/useOverlay';
import { useRouter } from 'vue-router';
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
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  width: 100%;
  height: 75px;
  z-index: $z-header;
  background-color: $background-color-landing-header;
  transition: $transition-landing-header-darken;
  color: white;
  font-family: josefin sans, sans-serif;
  text-transform: uppercase;

  .left-items-container {
    flex: 1;
    text-align: left;
    .left-icon {
      font-size: 20px;
      margin: 0 0 0 30px;
      transition: $transition-landing-header-font-color;
      cursor: pointer;
    }
  }

  .center-brand {
    cursor: pointer;

    .center-text {
      font-size: 25px;
      text-align: center;
      transition: $transition-landing-header-font-color;
    }
  }

  .right-items-container {
    flex: 1;
    text-align: right;
    .right-icon {
      font-size: 20px;
      margin: 0 30px 0 0;
      transition: $transition-landing-header-font-color;

      cursor: pointer;
    }
  }
}

@media (max-width: 480px) {
  .iv-landing-header {
    .center-brand {
      .center-text {
        font-size: 22px;
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
  }
}

@media (max-width: 250px) {
  .iv-landing-header {
    .center-brand {
      .center-text {
        font-size: 15px;
      }
    }
  }
}
</style>
