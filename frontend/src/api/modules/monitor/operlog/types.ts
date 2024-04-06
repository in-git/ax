export interface Operlog {
  createBy?: any;
  createTime?: any;
  updateBy?: any;
  updateTime?: any;
  remark?: any;
  operId: number;
  title: string;
  businessType: number;
  businessTypes?: any;
  method: string;
  requestMethod: string;
  operatorType: number;
  operName: string;
  deptName: string;
  operUrl: string;
  operIp: string;
  operLocation: string;
  operParam: string;
  jsonResult?: string;
  status: string;
  errorMsg?: any;
  operTime: string;
  costTime: number;
}
