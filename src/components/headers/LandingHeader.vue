<template>
  <div
    class="iv-landing-header"
    :style="{
      backgroundColor: color,
      color: fontColor,
    }"
  >
    <div class="left-items-container">
      <span
        v-for="(member, index) in membersList"
        :key="index"
        class="left-option-numeral"
        @click="selectMember(index)"
      >
        {{ member.key }}
      </span>
    </div>
    <div class="center-brand">
      <span class="center-text">INDIVISUAL</span>
    </div>
    <div class="right-items-container">
      <span v-for="(menu, index) in menuList" :key="index" class="right-option-text" @click="selectMenu(index)">
        {{ menu.name }}
      </span>
    </div>
  </div>
</template>

<script>
// JSON file
import commonVariables from '@/assets/data/common-variables.json';

export default {
  props: {
    color: {
      type: String,
      default: '',
    },
    fontColor: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      // Members
      membersList: commonVariables.members,

      // Menu
      menuList: commonVariables.landingHeaderMenu,
    };
  },
  methods: {
    selectMember(index) {
      this.$emit('selectedMember', index);
    },
    selectMenu(index) {
      this.$emit('selectedMenu', index);
    },
  },
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

      transition: $transition-landing-header-font-color;
    }
  }

  .center-brand {
    .center-text {
      font-size: 25px;
      text-align: center;

      transition: $transition-landing-header-font-color;
    }
  }

  .right-items-container {
    flex: 1;
    text-align: right;

    .right-option-text {
      @include menu-option-interaction;

      font-size: 13px;
      margin: 0 36px 0 0;

      transition: $transition-landing-header-font-color;
    }
  }
}
</style>
