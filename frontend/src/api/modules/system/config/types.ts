export interface SystemConfig {
  configId: number;
  configName: string;
  configKey: string;
  configValue: string;
  configType: 'Y' | 'N';
  createBy: string;
  createTime: any;
  updateBy: string;
  updateTime: any;
  remark: string;
}
