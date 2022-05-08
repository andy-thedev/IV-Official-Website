<template>
    <div class="iv-overlay"
        @click="close"
    >
        <font-awesome-icon
            :icon="['fas', 'xmark']"
            class="close-icon"
            @click="close"
        />
        <slot></slot>
    </div>
</template>

<script>
export default {
    components: {
    },
    methods: {
        close() {
            // In the landing page, the carousel item detail overlay should appear
            this.$emit('close');
        },
    }
}
</script>

<style lang="scss" scoped>
.iv-overlay {
    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: rgb(2 1 0 / 0.8);
    color: white;
}

.close-icon {
    font-size: 25px;

    position: absolute;

    top: 80px;
    left: 35px;

    cursor: pointer;
}
</style>