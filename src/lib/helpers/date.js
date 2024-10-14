import SupportedLanguages from '@/lib/enums/lang';

export const monthNames = {
  en: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  ko: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
};

/*
  Converts a given date string in ISO 8601 format to french label.
  Breakdown of months to season follows fashion SS/FW industry standards.
*/
export const dateToHuSae = (dateStringISO) => {
  const date = new Date(dateStringISO);
  const month = date.getMonth() + 1;

  if (month <= 1 || month >= 11) {
    // Winter
    return 'Un hiver coréen';
  } else if (month >= 2 && month <= 4) {
    // Spring
    return 'Un printemps coréen';
  } else if (month >= 5 && month <= 7) {
    // Summer
    return 'Un été coréen';
  } else if (month >= 8 && month <= 10) {
    // Autumn
    return 'Un automne coréen';
  } else {
    // Should not happen
    return 'Une saison inconnue';
  }
};

export const dateToHumanReadable = (dateStringISO, lang) => {
  const date = new Date(dateStringISO);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;

  const monthName = monthNames[lang][month];

  switch (lang) {
    case SupportedLanguages.en:
      return `${monthName} ${year}`;
    case SupportedLanguages.ko:
      return `${year}년 ${monthName}`;
    default:
      return `${monthName} ${year}`;
  }
};
