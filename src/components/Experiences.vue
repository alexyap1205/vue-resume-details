<template>
    <v-container grid-list-md>
        <v-layout row wrap>
            <v-flex md12 hidden-sm-and-down>
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
            <v-flex xs12 hidden-md-and-up>
                <v-card-actions class="justify-space-between">
                    <v-btn
                            flat
                            @click="prev"
                    >
                        <v-icon>keyboard_arrow_left</v-icon>
                    </v-btn>
                    <v-item-group
                            v-model="onboarding"
                            class="text-xs-center"
                            mandatory
                    >
                        <v-item
                                v-for="(experience, n) in experiencesValue"
                                :key="`btn-${n}`"
                        >
                            <v-btn
                                    slot-scope="{ active, toggle }"
                                    :input-value="active"
                                    icon
                                    @click="toggle"
                                    color="white"
                            >
                                <v-icon color="purple darken-3">
                                    brightness_1
                                </v-icon>
                            </v-btn>
                        </v-item>
                    </v-item-group>
                    <v-btn
                            flat
                            @click="next"
                    >
                        <v-icon>keyboard_arrow_right</v-icon>
                    </v-btn>
                </v-card-actions>
                <v-window v-model="onboarding">
                    <v-window-item
                            v-for="(experience, n) in experiencesValue"
                            :key="`card-${n}`"
                    >
                        <v-card flat>
                            <div>
                                <h2 :class="`headline font-weight-light mb-3 ${experiencesColor}--text`">{{experience.title}} - <span>{{experience.start}}</span></h2>
                                <ul>
                                    <li v-for="(duty, j) in experience.duties" :key="j">
                                        {{duty}}
                                    </li>
                                </ul>
                            </div>
                        </v-card>
                    </v-window-item>
                </v-window>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex';

    export default {
        data() {
            return {
                experiencesColor: 'purple',
                length: 3,
                onboarding: 0
            }
        },
        methods: {
            ...mapActions(['getExperiencesAsync']),
            next () {
                this.onboarding = this.onboarding + 1 === this.experiencesValue.length
                    ? 0
                    : this.onboarding + 1
            },
            prev () {
                this.onboarding = this.onboarding - 1 < 0
                    ? this.experiencesValue.length - 1
                    : this.onboarding - 1
            }
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