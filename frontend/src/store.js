import { reactive } from 'vue';

export const store = reactive({
    currentLandingHeaderColor: '',
    currentLandingHeaderFontColor: '',

    changeCurrentLandingHeaderColor(color) {
        this.currentLandingHeaderColor = color;
    },

    changeCurrentLandingHeaderFontColor(color) {
        this.currentLandingHeaderFontColor = color;
    },
})
