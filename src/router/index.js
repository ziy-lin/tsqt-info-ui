import { createWebHistory, createRouter } from 'vue-router'

export const routes = [
  {
    path: '/',
    component: () => import('@/views/home.vue'),
    alias: '/home'
  },
  {
    path: '/index',
    component: () => import('@/views/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
