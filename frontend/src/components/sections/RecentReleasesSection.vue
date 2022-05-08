<template>
    <div class="section recent-releases">
        <div class="primary-container">
            <div class="recent-releases-title">
                RECENT RELEASES
            </div>
            <IVTable
                :height="'600px'"
            />
        </div>
    </div>
</template>

<script>
import IVTable from '@/components/widgets/Table.vue';

export default {
    components: {
        IVTable,
    },
    props: {
    },
    data() {
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
.section {
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    &.recent-releases {
        background-color: white;

        .recent-releases-title {
            font-size: 20px;
        }
    }
}
</style>