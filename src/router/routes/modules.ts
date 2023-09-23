// @ts-nocheck

import { checkAuth } from '@/utils/authority';

// import.meta.glob() 直接引入所有的模块 Vite 独有的功能
const originalModules = import.meta.glob('./modules/**/*.ts', { eager: true });

const modules: Record<string, unknown> = {};

// 过滤权限
const filterModules = (modules) => {
  return modules.filter((m) => {
    if (m.meta.ignoreAuth) {
      if (m?.children) {
        m.children = filterModules(m.children);
      }
      return true;
    } else {
      if (checkAuth(m.meta.auth)) {
        if (m?.children) {
          m.children = filterModules(m.children);
        }
        return true;
      }
      return false;
    }
  });
};

for (const key in originalModules) {
  const _default = filterModules(originalModules[key].default);

  if (_default && _default.length) {
    modules[key] = { default: _default };
  }
}

export { modules };
