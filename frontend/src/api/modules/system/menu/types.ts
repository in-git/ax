//  菜单类型（M 文件夹 C 文件 F按钮）
export interface SystemMenu {
  createBy?: any;
  createTime: string;
  updateBy?: any;
  updateTime?: any;
  remark?: any;
  menuId: number;
  menuName: string;
  parentName?: any;
  parentId: number;
  orderNum: number;
  path: string;
  component?: string;
  query: string;
  isFrame: '0' | '1';
  isCache: '0' | '1';
  menuType: 'C' | 'M' | 'F';
  visible: string;
  status: string;
  perms: string;
  icon: string;
  children?: SystemMenu[];
}
