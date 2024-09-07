<template>
    <div
        class="iv-platform-table"
        :class="{ 'landing-dynamic': dynamicSizePreset === 'landing'}"
        :style="{ width: width }"
    >
        <div class="title">
            {{ title }}
        </div>
        <div class="title-border" />

        <div
            v-if="platforms.includes('youtube')"
            class="platform-option-container"
            @click.stop="goToUrl(options.youtube)"
        >
            <div
                class="platform-option-wrapper"
            >
                <font-awesome-icon
                    :icon="['fab', 'youtube']"
                    class="platform-icon"
                />
                <div class="platform-text">Youtube</div>
            </div>
        </div>

        <div
            v-if="platforms.includes('spotify')"
            class="platform-option-container"
            @click.stop="goToUrl(options.spotify)"
        >
            <div class="platform-option-wrapper">
                <font-awesome-icon
                    :icon="['fab', 'spotify']"
                    class="platform-icon"
                />
                <div class="platform-text">Spotify</div>
            </div>
        </div>

        <div
            v-if="platforms.includes('appleMusic')"
            class="platform-option-container"
            @click.stop="goToUrl(options.appleMusic)"
        >
            <div class="platform-option-wrapper">
                <font-awesome-icon
                    :icon="['fab', 'apple']"
                    class="platform-icon"
                />
                <div class="platform-text">Apple music</div>
            </div>
        </div>

        <div
            v-if="platforms.includes('soundcloud')"
            class="platform-option-container"
            @click.stop="goToUrl(options.soundcloud)"
        >
            <div class="platform-option-wrapper">
                <font-awesome-icon
                    :icon="['fab', 'soundcloud']"
                    class="platform-icon"
                />
                <div class="platform-text">Soundcloud</div>
            </div>
        </div>

        <div
            v-if="platforms.includes('deezer')"
            class="platform-option-container"
            @click.stop="goToUrl(options.deezer)"
        >
            <div class="platform-option-wrapper">
                <font-awesome-icon
                    :icon="['fab', 'deezer']"
                    class="platform-icon"
                />
                <div class="platform-text">Deezer</div>
            </div>
        </div>

        <div
            v-if="platforms.includes('amazonMusic')"
            class="platform-option-container"
            @click.stop="goToUrl(options.amazonMusic)"
        >
            <div class="platform-option-wrapper">
                <font-awesome-icon
                    :icon="['fab', 'amazon']"
                    class="platform-icon"
                />
                <div class="platform-text">Amazon music</div>
            </div>
        </div>

        <div
            v-if="platforms.length === 0"
            class="platform-option-container remove-cursor-pointer"
        >
            <div class="platform-option-wrapper">
                <font-awesome-icon
                    :icon="['fas', 'eye-slash']"
                    class="platform-icon"
                />
                <div class="platform-text remove-nowrap">
                    This track is no longer available
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {
    },
    props: {
        title: {
            type: String,
            default: '',
        },
        width: {
            // If `dynamicSizePreset` is set to a viable value, `width` will not affect
            // the styling of this component.
            type: String,
            default: '100%',
        },
        options: {
            type: Object,
            default: null,
        },
        dynamicSizePreset: {
            // This will overwrite existing styles of this component, and potentially
            // other props that are passed in.
            type: String,
            default: ''
        }
    },
    data() {
        return {
        }
    },
    computed: {
        platforms() {
            return Object.keys(this.options);
        }
    },
    created() {
    },
    methods: {
        goToUrl(url) {
            window.open(url, '_blank');
        },
    },
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/mixin-presets';

.landing-dynamic {
    @include landing-dynamic-sizes;
}

.remove-cursor-pointer {
    cursor: default!important;
}

.iv-platform-table {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: transparent;
    color: white;

    .title {
        font-size: 26px;
        text-transform: uppercase;

        font-family: Josefin Sans;
        font-weight: 700;
    }

    .title-border {
        width: 100%;
        border: white 1px solid;
        margin: 25px 0 0 0;
    }

    .platform-option-container{
        width: 100%;

        display: flex;
        justify-content: center;
        align-items: center;

        padding: 22px 0 22px 0;
        border-bottom: rgb(255 255 255 / 0.2) solid 2px;

        cursor: pointer;

        .platform-option-wrapper {
            width: 50%;

            display: flex;
            align-items: center;

            .platform-icon {
                width: 35px;
                height: 35px;
                font-size: 35px;
                margin-right: 20px;
            }
            
            .platform-text {
                font-family: Raleway;
                font-weight: 700;
                font-size: 17px;
                white-space: nowrap;
                text-transform: uppercase;

                &.remove-nowrap {
                    white-space: normal;
                }
            }
        }
    }
}
</style>