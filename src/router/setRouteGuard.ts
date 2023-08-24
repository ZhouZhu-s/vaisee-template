import { checkAuth } from '@/utils/authority';
import type { RouteLocationNormalized, Router } from 'vue-router';

const setTitle = (to: RouteLocationNormalized) => {
  const appTile = import.meta.env.VITE_APP_TITLE;
  document.title = `${appTile} - ${to.meta.title}`;
};

const checkLogin = (to: RouteLocationNormalized) => {
  if (to.meta?.isLogin) {
    const token = localStorage.getItem('Authorization');
    if (!token) {
      return false;
    }
  }
  return true;
};

const isAuth = (to: RouteLocationNormalized) => {
  const permissions = (to.meta?.permissions as string[]) || [];
  return checkAuth(permissions);
};

export const setRouteGuard = (router: Router) => {
  router.beforeEach((to, from, next) => {
    if (checkLogin(to)) {
      setTitle(to);
      next();
    } else {
      next({ path: '/' });
    }
  });
};
