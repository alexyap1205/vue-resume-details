<template>
    <v-container grid-list-md>
        <v-layout row wrap>
            <v-flex xs12>
                <v-timeline>
                    <v-timeline-item
                            v-for="(experience, i) in experiencesValue"
                            :color="experiencesColor"
                            :key="i"
                            small
                    >
                    <span
                            slot="opposite"
                            :class="`headline font-weight-bold ${experiencesColor}--text`"
                            v-text="experience.start"></span>
                        <div class="py-3">
                            <h2 :class="`headline font-weight-light mb-3 ${experiencesColor}--text`">{{experience.title}}</h2>
                            <ul>
                                <li v-for="(duty, j) in experience.duties" :key="j">
                                    {{duty}}
                                </li>
                            </ul>
                        </div>
                    </v-timeline-item>
                </v-timeline>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex';

    export default {
        data() {
            return {
                experiencesColor: 'purple'
            }
        },
        methods: {
            ...mapActions(['getExperiencesAsync'])
        },
        computed: {
            ...mapGetters(['experiencesValue'])
        },
        mounted: function() {
            this.$store.dispatch('getExperiencesAsync');
        }
    }
</script>

<style scoped>

</style>