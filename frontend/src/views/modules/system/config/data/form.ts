import type { SystemConfig } from '@/api/modules/system/config/types';

export const showConfigForm = ref(false);

const form: SystemConfig = {
  createBy: '',
  createTime: '',
  updateBy: '',
  remark: '',
  configId: 0,
  configName: '',
  configKey: '',
  configValue: '',
  configType: 'Y',
};

export const configForm = ref<SystemConfig>({
  ...form,
});

export const resetConfigForm = () => {
  configForm.value = {
    ...form,
  };
};
