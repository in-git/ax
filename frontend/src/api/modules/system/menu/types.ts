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
  isCache: number;
  menuType: MenuType;
  visible: string;
  status: string;
  perms: string;
  icon: string;
  createBy: string;
  createTime: any;
  updateBy: string;
  updateTime: any;
  remark: string;
  children?: SystemMenu[];
}
