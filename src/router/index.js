import Vue from 'vue'
import Router from 'vue-router'
import Demo from '@/components/demo'
import Home from '@/components/home'
import About from '@/components/about'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/demo',
      name: 'demo',
      component: Demo
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
