import { reactive } from 'vue';

export const useLandingCarousel = reactive({
  isNextItemTimerEnabled: true,

  enableNextItemTimer(enable) {
    this.isNextItemTimerEnabled = enable;
  },
});
