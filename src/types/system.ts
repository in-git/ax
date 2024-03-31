import type { TableColumnProps } from 'ant-design-vue';

export interface MenuItem {
  path: string;
  meta: Meta;
  sort?: number;
  redirect?: string;
  children?: MenuItem[];
  props?: boolean;
}

interface Meta {
  icon: string;
  title: string;
}
export interface SystemWindow {
  title: string;
  w?: number;
  h?: number;
  z?: number;
  component: any;
  id?: string;
  /* Extra data */
  data?: any;
  hidden?: boolean;
}

export interface TreeNode {
  id: number;
  label: string;
  children: TreeNode[];
}

/* 系统表格 */
export interface ColumnProps extends TableColumnProps {
  show?: boolean;
}
