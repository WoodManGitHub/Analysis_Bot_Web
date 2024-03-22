import Vue from 'vue'
import Router from 'vue-router'
import day from '../components/day.vue'
import week from '../components/week.vue'
import custom from '../components/custom.vue'
import index from '../components/index.vue'

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
    path: '/custom/:serverID',
    name: 'custom',
    component: custom,
    props: route => ({ start: route.query.start, end: route.query.end })
  }]
})
