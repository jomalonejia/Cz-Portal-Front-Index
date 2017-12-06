import Vue from 'vue'
import Router from 'vue-router'
import Index from '../index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
      children: [
        {
          path: '/',
          component: r => require.ensure([], () => r(require('../pages/home/home')), 'home')
        }
      ]
    }
  ]
})
