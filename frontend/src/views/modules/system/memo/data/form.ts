export const memoShowForm = ref(false);
import type { SystemMemo } from '@/api/modules/system/memo/types';
import type { Rule } from 'ant-design-vue/es/form/interface';

const form: SystemMemo = {
  memoId: 0,
  title: '',
  value: '',
  description: '',
  extra: '',
  userId: 0,
  deptId: 0,
  createTime: '',
  updateTime: '',
  type: '1',
};

export const memoForm = ref<SystemMemo>({
  ...form,
});

export const memoResetForm = () => {
  memoForm.value = {
    ...form,
  };
};

export const memoRules: Record<string, Rule[]> = {
  title: [{ required: true, trigger: 'change' }],
  value: [{ required: true, trigger: 'change' }],
  description: [{ required: false, trigger: 'change' }],
  extra: [{ required: false, trigger: 'change' }],
};
