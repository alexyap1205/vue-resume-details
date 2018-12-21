<template>
    <v-container grid-list-md>
        <v-layout row wrap>
            <v-flex xs6>
                <v-card>
                    <v-img :src="programmerSrc" aspect-ratio="2.75"></v-img>

                    <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-0">{{profileValue.title}}</h3>
                            <div>{{profileValue.overview}}</div>
                        </div>
                    </v-card-title>
                </v-card>
            </v-flex>
            <v-flex xs6>
                <v-list two-line>
                    <v-list-tile>
                        <v-list-tile-action>
                            <v-icon color="purple darken-2">info</v-icon>
                        </v-list-tile-action>

                        <v-list-tile-content>
                            <v-list-tile-title>{{profileValue.education}}</v-list-tile-title>
                            <v-list-tile-sub-title>Qualification</v-list-tile-sub-title>
                        </v-list-tile-content>
                    </v-list-tile>

                    <v-list-tile>
                        <v-list-tile-action>
                            <v-icon large color="purple darken-2">home</v-icon>
                        </v-list-tile-action>

                        <v-list-tile-content>
                            <v-list-tile-title>{{profileValue.address}}</v-list-tile-title>
                            <v-list-tile-sub-title>Address</v-list-tile-sub-title>
                        </v-list-tile-content>
                    </v-list-tile>

                    <v-list-tile>
                        <v-list-tile-action>
                            <v-icon large color="purple darken-2">phone</v-icon>
                        </v-list-tile-action>

                        <v-list-tile-content>
                            <v-list-tile-title>{{profileValue.mobile}}</v-list-tile-title>
                            <v-list-tile-sub-title>Mobile</v-list-tile-sub-title>
                        </v-list-tile-content>

                        <v-list-tile-action>
                            <v-icon>chat</v-icon>
                        </v-list-tile-action>
                    </v-list-tile>

                    <v-list-tile>
                        <v-list-tile-action>
                            <v-icon color="purple darken-2">mail</v-icon>
                        </v-list-tile-action>

                        <v-list-tile-content>
                            <v-list-tile-title>{{profileValue.email}}</v-list-tile-title>
                            <v-list-tile-sub-title>Email</v-list-tile-sub-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-flex>
            <v-flex xs12>
                <v-card>
                    <v-toolbar color="purple darken-2" dark>
                        <v-toolbar-title>Skills and Experiences</v-toolbar-title>
                    </v-toolbar>
                </v-card>
            </v-flex>
            <v-flex xs12>
                <div class="text-xs-center">
                    <v-chip v-for="skill in profileValue.skills" color="secondary" text-color="white" :key="skill">{{skill}}</v-chip>
                </div>
            </v-flex>
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

<style scoped>

</style>