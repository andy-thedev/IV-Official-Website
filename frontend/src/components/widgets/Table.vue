<template>
    <div
        class="iv-table"
        :style="{
            width: width,
            height: height,
        }"
    >
    </div>
</template>

<script>
export default {
    components: {
    },
    props: {
        width: {
            type: String,
            default: '100%',
        },
        height: {
            type: String,
            default: '100%',
        },
    },
    data() {
        return {
        }
    },
    computed: {
    },
    created() {
    },
    methods: {
    },
}
</script>

<style lang="scss" scoped>
.iv-table {
    border: solid 1px black;
    background-color: white;
}
</style>