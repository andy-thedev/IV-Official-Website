<template>
  <router-link :to="{ name: toName, params: { id: toParamId } }" class="text-link">
    {{ text }} <font-awesome-icon :icon="['fas', 'link']" class="link-icon" />
  </router-link>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    required: true,
    default: '',
  },
  toName: {
    type: String,
    required: true,
    default: '',
  },
  toParamId: {
    type: String,
    required: false,
    default: '',
  },
});
</script>

<style lang="scss" scoped>
.text-link {
  color: white;
  display: inline-flex;
  align-items: center;

  margin: 0 2px 0 0;
}

.link-icon {
  font-size: 10px;
}
</style>
