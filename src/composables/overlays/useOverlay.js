import { reactive } from 'vue';

export const useOverlay = reactive({
  overlay: null,

  updateOverlay(overlayInfo, trigger) {
    this.overlay = overlayInfo;
    this.overlay.trigger = trigger;
  },
  closeOverlay() {
    this.overlay = null;
  },
});
