export const deptShowForm = ref(false);
import type { SystemDept } from '@/api/modules/system/dept/types';
import type { Rule } from 'ant-design-vue/es/form/interface';

const form: SystemDept = {
  deptId: 0,
  parentId: undefined,
  ancestors: '',
  deptName: '',
  orderNum: 0,
  leader: '',
  phone: '',
  email: '',
  status: '0',
  delFlag: '',
  createBy: '',
  createTime: null,
  updateBy: '',
  updateTime: null,
  children: [],
};

export const deptForm = ref<SystemDept>({
  ...form,
});

export const deptResetForm = () => {
  deptForm.value = {
    ...form,
  };
};

export const deptRules: Record<string, Rule[]> = {
  deptName: [{ required: true, trigger: 'change' }],
  parentId: [{ required: true, trigger: 'change' }],
  orderNum: [{ required: false, trigger: 'change' }],
  leader: [{ required: false, trigger: 'change' }],
  phone: [{ required: false, trigger: 'change' }],
  status: [{ required: true, trigger: 'change' }],
};
