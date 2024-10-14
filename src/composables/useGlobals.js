import { reactive } from 'vue';

import SupportedLanguages from '@/lib/enums/lang';
import { detectLanguage } from '@/lib/helpers/lang.js';

const RESIZE_WIDTH = 1281;

export const useGlobals = reactive({
  isMobile: window.innerWidth < RESIZE_WIDTH,
  currLang: detectLanguage(),

  onResize() {
    const newIsMobile = window.innerWidth < RESIZE_WIDTH;
    if (useGlobals.isMobile !== newIsMobile) {
      useGlobals.isMobile = newIsMobile;
    }
  },
  changeCurrLang() {
    useGlobals.currLang = useGlobals.currLang === SupportedLanguages.ko ? SupportedLanguages.en : SupportedLanguages.ko;
  },
});
