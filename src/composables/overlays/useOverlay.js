import { reactive } from 'vue';

export const useOverlay = reactive({
  overlay: null,

  updateOverlay(overlayInfo, trigger) {
    useOverlay.overlay = overlayInfo;
    useOverlay.overlay.trigger = trigger;
  },
  closeOverlay() {
    useOverlay.overlay = null;
  },
});
