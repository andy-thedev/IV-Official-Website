import { reactive } from 'vue';

export const useLandingHeader = reactive({
  headerColor: '',
  headerFontColor: '',

  updateHeaderColor(color) {
    this.headerColor = color;
  },
  updateHeaderFontColor(color) {
    this.headerFontColor = color;
  },
  updateHeaderAndFontColors(headerColor, fontColor) {
    this.updateHeaderColor(headerColor);
    this.updateHeaderFontColor(fontColor);
  },
  resetHeaderAndFontColors() {
    this.updateHeaderColor('');
    this.updateHeaderFontColor('');
  },
});
