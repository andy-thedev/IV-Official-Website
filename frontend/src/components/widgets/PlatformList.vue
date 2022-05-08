<template>
    <div
        class="iv-platform-table"
        :style="{
            width: width,
        }"
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
            type: String,
            default: '100%',
        },
        options: {
            type: Object,
            default: null,
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
        margin: 18px 0 0 0;
    }

    .platform-option-container{
        width: 100%;

        display: flex;
        justify-content: center;
        align-items: center;

        padding: 20px 0 20px 0;
        border-bottom: rgb(255 255 255 / 0.4) solid 1px;

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
                font-size: 20px;
                white-space: nowrap;
                text-transform: uppercase;
            }
        }
    }
}
</style>