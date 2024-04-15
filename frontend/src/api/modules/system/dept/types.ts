export interface SystemDept {
  deptId: number;
  parentId: number;
  ancestors: string;
  deptName: string;
  orderNum: number;
  leader: string;
  phone: string;
  email: string;
  status: string;
  delFlag: string;
  createBy: string;
  createTime: any;
  updateBy: string;
  updateTime: any;
  children: SystemDept[];
}
