<template>
  <div class="iv-members-mobile-list">
    <div v-for="(member, index) in members" :key="index" class="iv-member-list-item-wrapper">
      <span class="iv-member-list-item-text">
        {{ member.name }}
      </span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  members: {
    type: Array,
  },
});
</script>

<style lang="scss" scoped>
.iv-members-mobile-list {
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  text-transform: uppercase;

  .iv-member-list-item-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-bottom: rgb(255 255 255 / 0.2) solid 2px;
    padding: 50px 0 50px 0;

    .iv-member-list-item-text {
      font-size: 30px;
      color: white;
    }
  }
}

@media (max-width: 1199px) {
  .iv-members-mobile-list {
    width: 35%;
  }
}

@media (max-width: 899px) {
  .iv-members-mobile-list {
    width: 50%;
    .iv-member-list-item-wrapper {
      .iv-member-list-item-text {
        font-size: 35px;
      }
    }
  }
}

@media (max-width: 599px) {
  .iv-members-mobile-list {
    width: 50%;
    .iv-member-list-item-wrapper {
      .iv-member-list-item-text {
        font-size: 25px;
      }
    }
  }
}

@media (max-width: 450px) {
  .iv-members-mobile-list {
    width: 70%;
    .iv-member-list-item-wrapper {
      padding: 40px 0 40px 0;
      .iv-member-list-item-text {
        font-size: 25px;
      }
    }
  }
}

@media (max-width: 300px) {
  .iv-members-mobile-list {
    .iv-member-list-item-wrapper {
      .iv-member-list-item-text {
        font-size: 20px;
      }
    }
  }
}

@media (max-width: 1280px) and (orientation: landscape) {
  .iv-members-mobile-list {
    width: 30%;
    .iv-member-list-item-wrapper {
      padding: 35px 0 35px 0;
      .iv-member-list-item-text {
        font-size: 20px;
      }
    }
  }
}
</style>
