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
    // Cache previous header colors in case we need to revert
    useLandingHeader.updateRecentHeaderColorAndFontColors(
      useLandingHeader.headerColor,
      useLandingHeader.headerFontColor,
    );
    useLandingHeader.updateHeaderColor('');
    useLandingHeader.updateHeaderFontColor('');
  },

  recentHeaderColor: '',
  recentHeaderFontColor: '',

  updateRecentHeaderColor(color) {
    useLandingHeader.recentHeaderColor = color;
  },
  updateRecentHeaderFontColor(color) {
    useLandingHeader.recentHeaderFontColor = color;
  },
  updateRecentHeaderColorAndFontColors(headerColor, fontColor) {
    useLandingHeader.updateRecentHeaderColor(headerColor);
    useLandingHeader.updateRecentHeaderFontColor(fontColor);
  },
  revertHeaderAndFontColors() {
    useLandingHeader.updateHeaderAndFontColors(
      useLandingHeader.recentHeaderColor,
      useLandingHeader.recentHeaderFontColor,
    );
  },
});
