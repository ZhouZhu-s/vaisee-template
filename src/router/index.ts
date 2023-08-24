import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './routes';
import { setRouteGuard } from './setRouteGuard';
import type { App } from 'vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

// router beforeEach
setRouteGuard(router);

export const setupRouter = (app: App) => {
  app.use(router);
};

export default router;
