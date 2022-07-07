import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: "/login"
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index.vue')
  },
  {
    path: '/tabs',
    name: 'tabs',
    component: () => import('../views/tabs/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
