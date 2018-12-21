<template>
    <div>
        <router-view/>
    </div>
</template>

<script>
    import {mapGetters } from 'vuex';

    export default {
        data() {
            return {
                programmerSrc: require('@/assets/programmer.jpg'),
                experiencesColor: 'purple'
            }
        },
        computed: {
            ...mapGetters(['profileValue', 'experiencesValue'])
        }
    }
</script>
