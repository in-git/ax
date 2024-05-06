interface SystemDict {
  createBy: string;
  createTime: string;
  updateBy?: any;
  updateTime?: any;
  remark: string;
  dictId: number;
  dictName: string;
  dictType: string;
  status: '0' | '1';
}
interface SystemDictData {
  createBy?: string;
  createTime?: string;
  updateBy?: any;
  updateTime?: any;
  remark: string;
  dictCode?: number;
  dictSort?: number;
  dictLabel: string;
  dictValue: string;
  dictType: string;
  cssClass: string;
  listClass: string;
  isDefault: string;
  status: '0' | '1';
  default?: boolean;
}
