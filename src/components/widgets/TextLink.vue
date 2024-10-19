<template>
  <a :href="resolvedLink" target="_blank" rel="noopener noreferrer" class="text-link">
    {{ text }} <font-awesome-icon :icon="['fas', 'link']" class="link-icon" />
  </a>
</template>

<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
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

const router = useRouter();

const resolvedLink = computed(() => {
  return router.resolve({
    name: props.toName,
    params: { id: props.toParamId },
  }).href;
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
