import type { AppRouteRecordRaw } from '@/router/types';
import { modules } from '@/router/routes/modules';

const routeModuleList: AppRouteRecordRaw[] = [];

// 加入到路由集合中
Object.keys(modules).forEach((key) => {
  const mod = (modules as any)[key].default || {};
  if (Array.isArray(mod)) {
    mod[0].meta?.isRootMenu ? routeModuleList.push(mod[0]) : routeModuleList.push(...mod);
  } else {
    routeModuleList.push(mod);
  }
});

export default routeModuleList;