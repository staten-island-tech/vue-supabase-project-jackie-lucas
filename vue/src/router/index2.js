import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '@/stores/auth.js'; // Import the store

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignUp.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LogIn.vue'),
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
    next('/login');
  } else {
    next();
  }
});

export default router;
