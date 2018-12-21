<template>
    <v-app id="inspire">
        <app-header></app-header>
        <v-content>
            <app-body></app-body>
        </v-content>
    </v-app>
</template>

<script>
    import Header from './components/Header.vue'
    import Body from './components/Body.vue'

    export default {
        components: {
            appHeader: Header,
            appBody: Body
        }
    }
</script>