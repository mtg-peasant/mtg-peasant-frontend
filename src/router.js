import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/rule',
      name: 'rule',
      component: () => import(/* webpackChunkName: "about" */ './views/Rule.vue')
    },
    {
      path: '/tournament',
      name: 'tournament',
      component: () => import(/* webpackChunkName: "about" */ './views/Tournament.vue')
    },
    {
      path: '/valideck',
      name: 'valideck',
      component: () => import(/* webpackChunkName: "about" */ './views/Valideck.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import(/* webpackChunkName: "about" */ './views/Search.vue')
    },
    {
      path: '/forum',
      name: 'forum',
      component: () => import(/* webpackChunkName: "about" */ './views/Forum.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
