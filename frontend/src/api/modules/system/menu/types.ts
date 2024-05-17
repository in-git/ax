export type MenuType = 'C' | 'F' | 'M';
export interface SystemMenu {
  menuId: number;
  menuName: string;
  parentId: number;
  orderNum: number;
  path: string;
  component: string;
  query: string;
  isFrame: '0' | '1';
  isCache: '0' | '1';
  menuType: MenuType;
  visible: '0' | '1';
  status: '0' | '1';
  perms: string;
  icon: string;
  createBy: string;
  createTime: any;
  updateBy: string;
  updateTime: any;
  remark: string;
  children?: SystemMenu[];
}
