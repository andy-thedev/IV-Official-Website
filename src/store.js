import { reactive } from 'vue';

export const store = reactive({
  // Landing Header
  currentLandingHeaderColor: '',
  currentLandingHeaderFontColor: '',

  changeCurrentLandingHeaderColor(color) {
    this.currentLandingHeaderColor = color;
  },
  changeCurrentLandingHeaderFontColor(color) {
    this.currentLandingHeaderFontColor = color;
  },

  // Overlay
  currentOverlay: null,

  changeCurrentOverlay(overlayInfo, trigger) {
    this.currentOverlay = overlayInfo;
    this.currentOverlay.trigger = trigger;
  },
  closeCurrentOverlay() {
    this.currentOverlay = null;
  },

  // Carousel (Currently only in landing page)
  enableCarouselNextItemTimer: true,

  activateCarouselNextItemTimer() {
    this.enableCarouselNextItemTimer = true;
  },
  disableCarouselNextItemTimer() {
    this.enableCarouselNextItemTimer = false;
  },
});
