import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _f19c75ea = () => interopDefault(import('../pages/404.vue' /* webpackChunkName: "pages/404" */))
const _b4eb3636 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/404",
    component: _f19c75ea,
    name: "404"
  }, {
    path: "/",
    component: _b4eb3636,
    name: "index"
  }, {
    path: "*",
    component: _f19c75ea,
    name: "custom"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
