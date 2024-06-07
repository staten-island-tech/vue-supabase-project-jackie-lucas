import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '@/stores/auth.js'; // Import the store

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
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
      meta: { requiresAuth: true },
    },
  ],
});

// Route guard to check authentication status
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore(); // Get the Pinia store instance
  if (to.meta.requiresAuth && !authStore.isLoggedIn) {
    alert('Please log in first.');
    next('/');
  } else {
    next();
  }
});

export default router;
