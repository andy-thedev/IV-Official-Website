import { reactive } from 'vue';

import SupportedLanguages from '@/lib/enums/lang';

const RESIZE_WIDTH = 1281;

export const useGlobals = reactive({
  isMobile: window.innerWidth < RESIZE_WIDTH,
  currLang: SupportedLanguages.EN,

  onResize() {
    const newIsMobile = window.innerWidth < RESIZE_WIDTH;
    if (useGlobals.isMobile !== newIsMobile) {
      useGlobals.isMobile = newIsMobile;
    }
  },
  changeCurrLang() {
    useGlobals.currLang = useGlobals.currLang === SupportedLanguages.KR ? SupportedLanguages.EN : SupportedLanguages.KR;
  },
});
