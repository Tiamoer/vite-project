// @ts-ignore
import {createRouter, RouteRecordRaw, createWebHistory, Router} from 'vue-router'

const routes:Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: 'Login',
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/components/Login.vue')
    },
    {
        path: '/home',
        name: 'Home',
        component: () => import('@/components/Home.vue')
    }
]

const router:Router = createRouter({
    history: createWebHistory(),
    routes
})

export default router