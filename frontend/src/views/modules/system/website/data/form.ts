export const websiteShowForm = ref(false);
import type { SystemWebsite } from '@/api/modules/system/website/types';
import type { Rule } from 'ant-design-vue/es/form/interface';

const form: SystemWebsite = {
  websiteId: 0,
  name: '',
  url: '',
  createTime: null,
  description: '',
  type: '',
  updateTime: null,
  icon: '',
};

export const websiteForm = ref<SystemWebsite>({
  ...form,
});

export const websiteResetForm = () => {
  websiteForm.value = {
    ...form,
  };
};

export const websiteRules: Record<string, Rule[]> = {
  name: [{ required: true, trigger: 'change' }],
  url: [{ required: true, trigger: 'change' }],
  createTime: [{ required: false, trigger: 'change' }],
  type: [{ required: true, trigger: 'change' }],
};
