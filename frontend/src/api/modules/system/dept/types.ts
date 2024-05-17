export interface SystemDept {
  deptId: number;
  parentId: number | undefined;
  ancestors?: string;
  deptName: string;
  orderNum?: number;
  leader?: string;
  phone?: string;
  email?: string;
  status: '0' | '1';
  delFlag?: string;
  createBy?: string;
  createTime?: any;
  updateBy?: string;
  updateTime?: any;
  children?: SystemDept[];
}
