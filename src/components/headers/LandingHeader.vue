<template>
  <div class="iv-landing-header" :style="{ backgroundColor: color, color: fontColor }">
    <div class="left-items-container">
      <span
        v-for="(member, index) in membersList"
        :key="index"
        class="left-option-numeral"
        @click="() => selectMember(index)"
      >
        {{ member.key }}
      </span>
    </div>
    <div class="center-brand">
      <span class="center-text">INDIVISUAL</span>
    </div>
    <div class="right-items-container">
      <span v-for="(menu, index) in menuList" :key="index" class="right-option-text" @click="() => selectMenu(index)">
        {{ menu.name }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue';
import commonVariables from '@/assets/data/common-variables.json';

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

const membersList = ref(commonVariables.members);
const menuList = ref(commonVariables.landingHeaderMenu);

const emit = defineEmits(['selectedMember', 'selectedMenu']);

const selectMember = (index) => {
  emit('selectedMember', index);
};

const selectMenu = (index) => {
  emit('selectedMenu', index);
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

    .left-option-numeral {
      @include menu-option-interaction;
      font-size: 20px;
      margin: 0 0 0 36px;
    }
  }

  .center-brand {
    .center-text {
      font-size: 25px;
      text-align: center;
    }
  }

  .right-items-container {
    flex: 1;
    text-align: right;

    .right-option-text {
      @include menu-option-interaction;
      font-size: 13px;
      margin: 0 36px 0 0;
    }
  }
}
</style>
