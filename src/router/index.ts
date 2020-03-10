import Vue from 'vue'
import Router from 'vue-router'
import day from '@/components/day.vue'
import month from '@/components/month.vue'
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
    path: '/month/:serverID',
    name: 'month',
    component: month
  }, {
    path: '/all/:serverID',
    name: 'all',
    component: all
  }]
})
