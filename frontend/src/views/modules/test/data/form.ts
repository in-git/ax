export const configShowForm = ref(false);
import type {  SystemConfig } from '@/api/modules/system/config/types';
import type { Rule } from 'ant-design-vue/es/form/interface';

const form:  SystemConfig = {
    configId: 0 ,
    configName: "" ,
    configKey: "" ,
    configValue: "" ,
    configType: "" ,
    createBy: "" ,
    createTime: null ,
    updateBy: "" ,
    updateTime: null ,
    remark: "" ,
};

export const configForm = ref<SystemConfig>({
  ...form,
});

export const configResetForm = () => {
  configForm.value = {
    ...form,
  };
};

export const configRules: Record<string, Rule[]> = {
  configId: [{ required: false , trigger: 'change' }],
  configName: [{ required: false , trigger: 'change' }],
  configKey: [{ required: false , trigger: 'change' }],
  configValue: [{ required: false , trigger: 'change' }],
  configType: [{ required: false , trigger: 'change' }],
  createBy: [{ required: false , trigger: 'change' }],
  createTime: [{ required: false , trigger: 'change' }],
  updateBy: [{ required: false , trigger: 'change' }],
  updateTime: [{ required: false , trigger: 'change' }],
  remark: [{ required: false , trigger: 'change' }],
};
