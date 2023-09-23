import type { RouteLocationNormalized, Router } from 'vue-router';

import { checkAuth } from '@/utils/authority';
import { message } from 'ant-design-vue';

const setTitle = (to: RouteLocationNormalized) => {
  const appTile = import.meta.env.VITE_APP_TITLE;
  document.title = `${appTile} - ${to.meta.title}`;
};

const checkLogin = (to: RouteLocationNormalized) => {
  if (to.meta?.needLogin) {
    const token = localStorage.getItem('Authorization');
    if (!token) {
      return false;
    }
  }
  return true;
};

const isAuth = (to: RouteLocationNormalized) => {
  if (to.meta?.ignoreAuth) {
    const auth = (to.meta.auth as string[]) || [];
    return checkAuth(auth);
  }
  return true;
};

export const setRouteGuard = (router: Router) => {
  router.beforeEach((to, from, next) => {
    if (checkLogin(to)) {
      setTitle(to);
      next();
    } else if (isAuth(to)) {
      next();
    } else {
      message.warning('请先登录');
      next({ path: '/' });
    }
  });
};
