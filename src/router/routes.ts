import type { RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
  {
    meta: {
      title: '',
      keepAlive: false,
      isLogin: false,
      permissions: [],
    },
    path: '/views', 
    name: 'Layout', 
    component: () => import('@/layouts/index.vue'),
    redirect: '/views/a-v',
    children: [
      {
        meta: {
          title: 'a-v',
          keepAlive: false,
          isLogin: false,
          permissions: [],
        },
        path: 'a-v', 
        name: 'a-v', 
        component: () => import('@/views/a-v/index.vue'),
      },
      {
        meta: {
          title: 'b-v',
          keepAlive: true,
          isLogin: false,
          permissions: [],
        },
        path: 'b-v', 
        name: 'b-v', 
        component: () => import('@/views/b-v/index.vue'),
      },
      {
        meta: {
          title: 'a-tab',
          keepAlive: true,
          isLogin: false,
          permissions: [],
        },
        path: 'a-tab', 
        name: 'a-tab', 
        component: () => import('@/views/a-tab/index.vue'),
      },
      //-- append router here --
    ]
  },
];
