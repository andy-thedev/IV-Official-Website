import SupportedLanguages from '@/lib/enums/lang.js';

/*
  Detects the user's preferred language from the user's browser, and returns the platfrom compatible, equivalent enum value
  Returns English, if the user's preferred language is not supported on the platform.
*/
export const detectLanguage = () => {
  const browserLang = navigator.language || navigator.languages[0];
  const lang = browserLang.split('-')[0];

  return SupportedLanguages[lang] || SupportedLanguages.en;
};
