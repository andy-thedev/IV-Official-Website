<template>
    <div class="iv-landing-wrapper">
        <IVLandingMobileHeader
            v-if="isMobile"
            :isTransparent="isLandingHeaderTransparent"
        />
        <IVLandingHeader
            v-else
            :isTransparent="isLandingHeaderTransparent"
        />
        <router-view />
    </div>
</template>

<script>
import IVLandingHeader from '@/components/header/LandingHeader.vue'
import IVLandingMobileHeader from '@/components/header/LandingMobileHeader.vue'

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
            // Landing header should turn transparent -> opaque if the user scrolls down far enough
            this.isLandingHeaderTransparent = window.top.scrollY < LANDING_HEADER_OPAQUE_HEIGHT
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
    width: 100%;

    display: flex;
    flex-direction: column;
}
</style>
