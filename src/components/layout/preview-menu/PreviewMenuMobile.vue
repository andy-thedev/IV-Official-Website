<template>
  <div class="iv-preview-menu-mobile">
    <div v-for="(item, index) in menu" :key="index" class="item-wrapper">
      <span class="item-text">
        {{ item.name }}
      </span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  menu: {
    type: Array,
  },
});
</script>

<style lang="scss" scoped>
.iv-preview-menu-mobile {
  width: 100%;
  height: 100%;

  padding: 0 40px 0 40px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-weight: 600;
  text-transform: uppercase;

  .item-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-bottom: rgb(255 255 255 / 0.2) solid 2px;
    padding: 25px 0 25px 0;

    .item-text {
      font-size: 30px;
      color: white;
    }
  }
}

@media (max-width: 899px) {
  .iv-preview-menu-mobile {
    .item-wrapper {
      .item-text {
        font-size: 35px;
      }
    }
  }
}

@media (max-width: 599px) {
  .iv-preview-menu-mobile {
    .item-wrapper {
      .item-text {
        font-size: 25px;
      }
    }
  }
}

@media (max-width: 450px) {
  .iv-preview-menu-mobile {
    .item-wrapper {
      .item-text {
        font-size: 25px;
      }
    }
  }
}

@media (max-width: 300px) {
  .iv-preview-menu-mobile {
    .item-wrapper {
      .item-text {
        font-size: 20px;
      }
    }
  }
}

@media (max-width: 1280px) and (orientation: landscape) {
  .iv-preview-menu-mobile {
    .item-wrapper {
      .item-text {
        font-size: 20px;
      }
    }
  }
}
</style>
