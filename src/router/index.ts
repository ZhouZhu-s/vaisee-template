import { ConstantRoutes, LayoutRoute, LayoutRouteName } from './constant';
import { createRouter, createWebHistory } from 'vue-router';

import type { App } from 'vue';
import routeModuleList from './routes/index';
import { setRouteGuard } from './setRouteGuard';

LayoutRoute.children = routeModuleList;

const router = createRouter({
  history: createWebHistory(import.meta.env.import.meta.env.VITE_BASE_PATH),
  routes: [LayoutRoute, ...ConstantRoutes],
});

routeModuleList.forEach((route) => {
  router.addRoute(LayoutRouteName + '', route);
});

// router beforeEach
setRouteGuard(router);

export const setupRouter = (app: App) => {
  app.use(router);
};

export default router;
