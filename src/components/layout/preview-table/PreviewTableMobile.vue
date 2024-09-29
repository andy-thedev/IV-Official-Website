<template>
  <div class="iv-preview-table-mobile">
    <div v-for="(option, index) in options" :key="index" class="item-wrapper">
      <span class="item-text">
        {{ option.name }}
      </span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  options: {
    type: Array,
  },
});
</script>

<style lang="scss" scoped>
.iv-preview-table-mobile {
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

@media (max-width: 1199px) {
  .iv-preview-table-mobile {
    width: 100%;
  }
}

@media (max-width: 899px) {
  .iv-preview-table-mobile {
    width: 100%;
    .item-wrapper {
      .item-text {
        font-size: 35px;
      }
    }
  }
}

@media (max-width: 599px) {
  .iv-preview-table-mobile {
    width: 100%;
    .item-wrapper {
      .item-text {
        font-size: 25px;
      }
    }
  }
}

@media (max-width: 450px) {
  .iv-preview-table-mobile {
    width: 100%;
    .item-wrapper {
      .item-text {
        font-size: 25px;
      }
    }
  }
}

@media (max-width: 349px) {
  .iv-preview-table-mobile {
    .item-wrapper {
      .item-text {
        font-size: 20px;
      }
    }
  }
}

@media (max-width: 1280px) and (orientation: landscape) {
  .iv-preview-table-mobile {
    width: 100%;
    .item-wrapper {
      .item-text {
        font-size: 20px;
      }
    }
  }
}
</style>
