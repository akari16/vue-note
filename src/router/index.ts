import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import Slots from '../views/slots/Index.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/slots',
    name: 'slots',
    component: () => import(/* webpackChunkName: "slots" */ '../views/slots/Index.vue')
  },
  {
    path: '/computedWatch',
    name: 'computedWatch',
    component: () => import(/* webpackChunkName: "slots" */ '../views/computedWatch/Index.vue')
  },
  {
    path: '/deepClone',
    name: 'deepClone',
    component: () => import(/* webpackChunkName: "deepClone" */ '../views/deepClone/Index.vue')
  },
  {
    path: '/defineProperty',
    name: 'defineProperty',
    component: () => import(/* webpackChunkName: "defineProperty" */ '../views/defineProperty/Index.vue')
  },
  {
    path: '/defineProperty',
    name: 'defineProperty',
    component: () => import(/* webpackChunkName: "defineProperty" */ '../views/defineProperty/Index.vue')
  },
  {
    path: '/numbers',
    name: 'numbers',
    component: () => import(/* webpackChunkName: "numbers" */ '../views/jsBase/Numbers.vue')
  },
  {
    path: '/mathFun',
    name: 'mathFun',
    component: () => import(/* webpackChunkName: "mathFun" */ '../views/jsBase/MathFun.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
