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
        },
        {
          path: '/collections',
          component: r => require.ensure([], () => r(require('../pages/collections/collections')), 'collections')
        },
        {
          path: '/info',
          component: r => require.ensure([], () => r(require('../pages/info/info')), 'info')
        },
        {
          path: '/about',
          component: r => require.ensure([], () => r(require('../pages/about/about')), 'about')
        },
        {
          path: '/test',
          component: r => require.ensure([], () => r(require('../pages/test/test')), 'test')
        }
      ]
    }
  ]
})
