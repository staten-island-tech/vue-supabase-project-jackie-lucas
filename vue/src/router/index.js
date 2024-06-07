// index.js

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useAuthStore } from '../stores/auth.js'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('../views/testview.vue'),
      meta: { requiresAuth: true }, 
    },
    {
      path: '/exit',
      name: 'exit',
      component: () => import('../views/exitview.vue'),
    },
  ],
})

router.beforeEach((to, _, next) => {
  const authStore = useAuthStore()
  if (to.meta.requiresAuth && !authStore.user && !authStore.loading) {
    alert('Please sign in to access this page')
    next('/')
  } else {
    next()
  }
})

export default router
