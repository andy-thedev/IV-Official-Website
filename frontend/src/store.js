import { reactive } from 'vue';

export const store = reactive({
    currentLandingHeaderColor: '',

    changeCurrentLandingHeaderColor(color) {
        this.currentLandingHeaderColor = color;
    }
})
