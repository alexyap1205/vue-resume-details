<template>
    <v-toolbar
            color="purple darken-3"
            dark
            app
            fixed
    >
        <v-avatar size="64" tile align="">
            <img
                    src="../assets/avatar.png"
                    alt="Avatar"
                    class = "round-avatar"
            >
        </v-avatar>
        <v-toolbar-title class="ml-0 pl-3">
            <span>{{profileValue.name | capitalize}}</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon to="/">
            <v-icon>home</v-icon>
        </v-btn>
        <v-btn icon to="/experiences">
            <v-icon>business</v-icon>
        </v-btn>
    </v-toolbar>
</template>

<script>
    import {mapGetters, mapActions } from 'vuex';

    export default {
        methods: {
            ...mapActions(['getSummaryAsync'])
        },
        computed: {
            ...mapGetters(['profileValue'])
        },
        filters: {
            capitalize: function (value) {
                if (!value)
                    return '';
                value = value.toString();
                return value.toUpperCase();
            }
        },
        mounted: function() {
            this.$store.dispatch('getSummaryAsync');
        }
    }
</script>

<style scoped>
    .round-avatar {
        border-radius: 50%;
    }
</style>