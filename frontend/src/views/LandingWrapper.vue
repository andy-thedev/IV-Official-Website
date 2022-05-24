<template>
    <div class="iv-landing-wrapper">
        <IVLandingMobileHeader
            v-if="isMobile"
            :color="store.currentLandingHeaderColor"
            :fontColor="store.currentLandingHeaderFontColor"
            @selectedMobileMembers="showMemberOverlay"
            @selectedMobileMenu="showMenuOverlay"
            @close="closeOverlay"
        />
        <IVLandingHeader
            v-else
            :color="store.currentLandingHeaderColor"
            :fontColor="store.currentLandingHeaderFontColor"
            @selectedMember="showMemberOverlay"
            @selectedMenu="showMenuOverlay"
        />
        <transition
            name="fade"
        >
            <IVOverlay
                v-if="store.currentOverlay && store.currentOverlay.trigger === 'member'"
                @close="closeOverlay"
            >
                <IVMembersMobileList
                    v-if="isMobile"
                    :members="store.currentOverlay.members"
                />
            </IVOverlay>
        </transition>
        <router-view />
    </div>
</template>

<script>
// Store state management
import { store } from '@/store.js'

// JSON file
import commonVariables from '@/assets/data/common-variables.json';

// Headers
import IVLandingHeader from '@/components/headers/LandingHeader.vue'
import IVLandingMobileHeader from '@/components/headers/LandingMobileHeader.vue'

// Global overlays
import IVOverlay from '@/components/widgets/Overlay.vue';
import IVMembersMobileList from '@/components/widgets/MembersMobileList.vue';

const RESIZE_WIDTH = 1281;
const LANDING_HEADER_OPAQUE_HEIGHT = 500

export default {
    name: 'LandingWrapper',
    components: {
        // Headers
        IVLandingHeader,
        IVLandingMobileHeader,

        // Global overlays
        IVOverlay,
        IVMembersMobileList,
    },
    data() {
        return {
            store,
            isMobile: false,

            // Header properties
            isLandingHeaderTransparent: true,

            // Global overlay
            membersList: commonVariables.members
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
        },
        showMemberOverlay(index) {
            // Disable next item timer in case user is on landing page
            this.store.disableCarouselNextItemTimer();
            // Reset header color to default
            this.store.changeCurrentLandingHeaderColor('');
            this.store.changeCurrentLandingHeaderFontColor('');
            // Show overlay
            this.store.changeCurrentOverlay({
                members: this.membersList.map(member => member.name)
            }, 'member');
        },
        showMenuOverlay(index) {
            // Disable next item timer in case user is on landing page
            this.store.disableCarouselNextItemTimer();
            // Reset header color to default
            this.store.changeCurrentLandingHeaderColor('');
            this.store.changeCurrentLandingHeaderFontColor('');
            // Show overlay
        },
        closeOverlay() {
            // Hide overlay
            this.store.closeCurrentOverlay();
            this.store.activateCarouselNextItemTimer();
        }
    },
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/mixin-presets';

.iv-landing-wrapper {
    width: 100vw;

    display: flex;
    flex-direction: column;

    @include fade-transition-preset;
}
</style>
