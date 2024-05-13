interface SystemDict {
  dictId: number;
  dictName: string;
  dictType: string;
  createBy: string;
  createTime: any;
  updateBy: string;
  updateTime: any;
  remark: string;
  status: '0' | '1';
}
interface SystemDictData {
  dictCode: number;
  dictSort: number;
  dictLabel: string;
  dictValue: string;
  dictType: string;
  cssClass: string;
  listClass: string;
  isDefault: string;
  createBy: string;
  createTime: any;
  updateBy: string;
  updateTime: any;
  remark: string;
  status: '0' | '1';
  default?: boolean;
}
