import type { VueNode } from "ant-design-vue/es/_util/type";

export interface MenuItemType {
  title: string;  // meta.title
  label: string;  // meta.title
  key: string;  // name
  icon?: VueNode; // meta.icon
  children?: MenuItemType[]; // children
  disabled?: boolean; // meta.disabled
  danger?: boolean; // meta.danger
  orderNo: number;
}
