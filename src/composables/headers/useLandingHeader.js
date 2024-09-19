import { reactive } from 'vue';

export const useLandingHeader = reactive({
  headerColor: '',
  headerFontColor: '',

  updateHeaderColor(color) {
    useLandingHeader.headerColor = color;
  },
  updateHeaderFontColor(color) {
    useLandingHeader.headerFontColor = color;
  },
  updateHeaderAndFontColors(headerColor, fontColor) {
    useLandingHeader.updateHeaderColor(headerColor);
    useLandingHeader.updateHeaderFontColor(fontColor);
  },
  resetHeaderAndFontColors() {
    useLandingHeader.updateHeaderColor('');
    useLandingHeader.updateHeaderFontColor('');
  },
});
