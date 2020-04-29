import Vue from 'vue'
import Router from 'vue-router'
import day from '@/components/day.vue'
import week from '@/components/week.vue'
import all from '@/components/all.vue'
import index from '@/components/index.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'index',
    component: index
  }, {
    path: '/day/:serverID',
    name: 'day',
    component: day
  }, {
    path: '/week/:serverID',
    name: 'week',
    component: week
  }, {
    path: '/all/:serverID',
    name: 'all',
    component: all
  }]
})
