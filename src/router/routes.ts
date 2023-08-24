import type { RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
  {
  meta: {
    title: 'a-v',
    keepAlive: false,
    isLogin: true,
    permissions: [],
  },
  path: '/a-v', 
  name: 'a-v', 
  component: () => import('@/views/a-v/index.vue'),
},
{
  meta: {
    title: 'b-v',
    keepAlive: true,
    isLogin: true,
    permissions: [],
  },
  path: '/b-v', 
  name: 'b-v', 
  component: () => import('@/views/b-v/index.vue'),
},
//-- append router here --
];
