import Vue from 'vue'
import Router from 'vue-router'
import Overview from './components/Overview.vue'
import Experiences from './components/Experiences.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {path: '/', component: Overview},
    {path: '/experiences', component: Experiences}
  ]
})
