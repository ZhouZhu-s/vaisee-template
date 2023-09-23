import type { AppRouteRecordRaw } from './types';

export const LayoutComponent = () => import('@/layouts/index.vue');

export const LayoutRouteName = 'Layout';

export const LayoutRoutePath = '/views';

export const LayoutRoute: AppRouteRecordRaw = {
  meta: {
    title: 'views',
    keepAlive: false,
    needLogin: false,
    ignoreAuth: true,
    auth: []
  },
  path: LayoutRoutePath,
  name: LayoutRouteName,
  component: LayoutComponent,
  redirect: '/views/three',
  children: []
};

export const ConstantRoutes: AppRouteRecordRaw[] = [];
