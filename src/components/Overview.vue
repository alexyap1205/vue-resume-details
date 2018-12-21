<template>
    <v-container grid-list-md>
        <v-layout row wrap>
            <v-flex xs12 md6 lg6>
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
            <v-flex xs12 hidden-md-and-up>
                <div class="text-xs-center">
                    <v-chip v-for="skill in profileValue.skills" color="secondary" text-color="white" :key="skill">{{skill}}</v-chip>
                </div>
            </v-flex>
            <v-flex xs12 md6 lg6>
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
            <v-flex lg12 hidden-sm-and-down>
                <div class="text-xs-center">
                    <v-chip v-for="skill in profileValue.skills" color="secondary" text-color="white" :key="skill">{{skill}}</v-chip>
                </div>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import {mapGetters } from 'vuex';

    export default {
        data() {
            return {
                programmerSrc: require('@/assets/programmer.jpg')
            }
        },
        computed: {
            ...mapGetters(['profileValue'])
        }
    }
</script>

<style scoped>

</style>