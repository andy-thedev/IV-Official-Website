<template>
    <div
        class="iv-landing-header"
        :style="{
            backgroundColor: color,
            color: fontColor,
        }"
    >
        <div class="left-items-container">
            <font-awesome-icon
                :icon="['fas', 'headphones-alt']"
                class="left-icon"
                @click="selectMembers"
            />
        </div>
        <div class= "center-brand">
            <span class="center-text">INDIVISUAL</span>
        </div>
        <div class="right-items-container">
            <font-awesome-icon
                :icon="['fas', 'bars']"
                class="right-icon"
                @click="selectMenu"
            />
        </div>
    </div>
</template>

<script>
// Store state management
import { store } from '@/store.js'

export default {
    props: {
        color: {
            type: String,
            default: '',
        },
        fontColor: {
            type: String,
            default: '',
        }
    },
    data() {
        return {
            store,
        }
    },
    methods: {
        selectMembers() {
            // If overlay is already visible, disable it.
            // Otherwise, show overlay
            if (this.store.currentOverlay && this.store.currentOverlay.trigger === 'member') {
                this.$emit('close');
            } else {
                this.$emit('selectedMobileMembers');
            }
        },
        selectMenu() {
            this.$emit('selectedMobileMenu');
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/common-variables';

@mixin menu-option-interaction {
    cursor: pointer;

    transition: $transition-landing-header-font-color;

    &:hover {
        color: $primary-color;
    }
}

/* Assume the following css is for viewport width 1280px or below (See LandingWrapper.vue) */

.iv-landing-header {
    position: fixed;
    top: 0;
    right: 0;

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;

    width: 100%;
    height: 75px;
    z-index: $z-header;

    background-color: $background-color-landing-header;
    transition: $transition-landing-header-darken;

    color: white;
    font-family:josefin sans,sans-serif;
    text-transform: uppercase;

    .left-items-container {
        flex: 1;
        text-align: left;

        .left-icon {
            font-size: 20px;
            margin: 0 0 0 30px;

            transition: $transition-landing-header-font-color;
        }
    }

    .center-brand {
        .center-text {
            font-size: 25px;
            text-align: center;

            transition: $transition-landing-header-font-color;
        }
    }

    .right-items-container {
        flex: 1;
        text-align: right;

        .right-icon {
            font-size: 20px;
            margin: 0 30px 0 0;

            transition: $transition-landing-header-font-color;
        }
    }
}

@media(max-width:480px){
    .iv-landing-header {
        .center-brand {
            .center-text {
                font-size: 22px;
            }
        }
    }
}

@media(max-width:300px){
    .iv-landing-header {
        .center-brand {
            .center-text {
                font-size: 20px;
            }
        }
    }
}

@media(max-width:250px){
    .iv-landing-header {
        .center-brand {
            .center-text {
                font-size: 15px;
            }
        }
    }
}
</style>