import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/UserHome.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/home', component: Home },
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
