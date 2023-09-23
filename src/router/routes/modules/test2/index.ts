import type { AppRouteRecordRaw } from '@/router/types';
import { CodeSandboxOutlined } from '@ant-design/icons-vue';

const test: AppRouteRecordRaw[] = [
  {
    meta: {
      title: 'test2',
      icon: CodeSandboxOutlined,
      keepAlive: false,
      needLogin: false,
      isRootMenu: true,
      ignoreAuth: false,
      auth: ['test'],
      orderNo: 3,
    },
    path: 'test',
    name: 'test2',
    component: () => import('@/views/test2-index/index.vue'),
  },
];

export default test;
