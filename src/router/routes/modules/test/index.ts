import type { AppRouteRecordRaw } from '@/router/types';
import { CodeSandboxOutlined } from '@ant-design/icons-vue';

const test: AppRouteRecordRaw[] = [
  {
    meta: {
      title: 'test',
      icon: CodeSandboxOutlined,
      keepAlive: false,
      needLogin: false,
      isRootMenu: true,
      ignoreAuth: true,
      auth: [],
      orderNo: 2,
    },
    path: 'test',
    name: 'test',
    component: () => import('@/views/test/index.vue'),
  },
];

export default test;
