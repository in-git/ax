export interface SystemMenu {
  createBy?: any;
  createTime: string;
  updateBy?: any;
  updateTime?: any;
  remark?: any;
  menuId: string;
  menuName: string;
  parentName?: any;
  parentId: number;
  orderNum: number;
  path: string;
  component?: string;
  query: string;
  isFrame: '0' | '1';
  isCache: string;
  menuType: string;
  visible: string;
  status: string;
  perms: string;
  icon: string;
  children: any[];
}
