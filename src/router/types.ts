import type { RouteMeta, RouteRecordRaw } from 'vue-router';

import type { Component } from 'vue';

interface Mete extends RouteMeta {
  /**
   * 路由标题
   */
  title: string;
  /**
   * 是否缓存
   */
  keepAlive: boolean;
  /**
   * 是否需要登录
   */
  needLogin: boolean;
  /**
   * 是否忽略权限
   */
  ignoreAuth: boolean;
  /**
   * 权限
   */
  auth: string[];
  /**
   * 菜单图标
   */
  icon?: Component | string;
  /**
   * 是否显示菜单
   */
  hideMenu?: boolean;
  /**
   * 菜单排序，只对第一级有效，数值越大，排序越靠后
   */
  orderNo?: number;
  /**
   * 是否为一级菜单
   */
  isRootMenu?: boolean;
}

export type AppRouteRecordRaw = RouteRecordRaw & {
  meta: Mete;
  children?: AppRouteRecordRaw[];
}

