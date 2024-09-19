import { reactive } from 'vue';

const RESIZE_WIDTH = 1281;

export const useGlobals = reactive({
  isMobile: window.innerWidth < RESIZE_WIDTH,

  onResize() {
    const newIsMobile = window.innerWidth < RESIZE_WIDTH;
    if (useGlobals.isMobile !== newIsMobile) {
      useGlobals.isMobile = newIsMobile;
    }
  },
});
