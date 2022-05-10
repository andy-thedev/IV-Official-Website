<template>
    <div class="iv-landing-wrapper">
        <IVLandingMobileHeader
            v-if="isMobile"
            :color="store.currentLandingHeaderColor"
            :fontColor="store.currentLandingHeaderFontColor"
        />
        <IVLandingHeader
            v-else
            :color="store.currentLandingHeaderColor"
            :fontColor="store.currentLandingHeaderFontColor"
        />
        <router-view />
    </div>
</template>

<script>
// Store state management
import { store } from '@/store.js'

// Headers
import IVLandingHeader from '@/components/headers/LandingHeader.vue'
import IVLandingMobileHeader from '@/components/headers/LandingMobileHeader.vue'

const RESIZE_WIDTH = 1280;
const LANDING_HEADER_OPAQUE_HEIGHT = 500

export default {
    name: 'LandingWrapper',
    components: {
        IVLandingHeader,
        IVLandingMobileHeader,
    },
    data() {
        return {
            store,

            isLandingHeaderTransparent: true,
            isMobile: false,
        }
    },
    created() {
        // Check user's viewport to determine default/mobile view
        this.isMobile = window.innerWidth < RESIZE_WIDTH
    },
    mounted() {
        window.addEventListener("scroll", this.onScroll)
        window.addEventListener("resize", this.onResize)
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.onScroll)
        window.removeEventListener("resize", this.onResize)
    },
    methods: {
        onScroll(e) {
            // Landing header should turn:
            // Transparent -> opaque black if the user scrolls down far enough
            // Opaque black -> transparent if the user scrolls up far enough
            if (window.top.scrollY < LANDING_HEADER_OPAQUE_HEIGHT) {
                this.store.changeCurrentLandingHeaderColor('');
            } else {
                this.store.changeCurrentLandingHeaderColor('black');
            }
        },
        onResize(e) {
            // Show default/mobile view depending on user's viewport width
            if ((window.innerWidth < RESIZE_WIDTH) && !this.isMobile) {
                this.isMobile = true;
            } else if ((window.innerWidth >= RESIZE_WIDTH) && this.isMobile) {
                this.isMobile = false;
            } else {
                // Case 1: viewport width less than resize limit, but is already mobile view
                // Case 2: viewport width greater than resize limit, but is already default view
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.iv-landing-wrapper {
    width: 100vw;

    display: flex;
    flex-direction: column;
}
</style>
