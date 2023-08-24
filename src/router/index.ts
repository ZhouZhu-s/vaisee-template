import { createRouter, createWebHistory, type RouteLocationNormalized } from 'vue-router';
import { routes } from './routes';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  next();
});

export default router;
