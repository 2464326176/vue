import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/UserHome.vue'
import About from '../components/UserAbout.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})
