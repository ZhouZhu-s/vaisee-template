import type { AppRouteRecordRaw } from '@/router/types';
import type { MenuItemType } from './types';
import { modules } from '@/router/routes/modules';

const menuModuleList: AppRouteRecordRaw[] = [];

// 加入到菜单集合中
Object.keys(modules).forEach((key) => {
  const mod = (modules as any)[key].default || {};
  Array.isArray(mod) ? menuModuleList.push(...mod) : menuModuleList.push(mod);
});

function convert(menu: AppRouteRecordRaw | AppRouteRecordRaw[]): MenuItemType[] {

  const items: MenuItemType[] = [];

  function recurse(item: AppRouteRecordRaw): MenuItemType | null {
    const menuItem: MenuItemType = {
      title: item.meta.title,
      label: item.meta.title,
      key: item.name as string,
      orderNo: item.meta?.orderNo || 0,
    };

    if (item.children) {
      menuItem.children = [];
      item.children.forEach(child => {
        const childItem = recurse(child as AppRouteRecordRaw);
        if (childItem) {
          // console.log('childItem', childItem);
          menuItem.children?.push(childItem);
        }
      });
    }

    if (menuItem.children?.length || !item.meta.hideMenu) {
      return menuItem;
    } else {
      return null;
    }
  }

  if (Array.isArray(menu)) {
    menu.forEach(item => {
      const converted = recurse(item);
      if (converted) {
        // console.log('converted', converted);
        items.push(converted);
      }
    });
  } else {
    const converted = recurse(menu);
    if (converted) {
      items.push(converted);
    }
  }

  return items.sort((a, b) => a.orderNo - b.orderNo);
}

export default convert(menuModuleList);
