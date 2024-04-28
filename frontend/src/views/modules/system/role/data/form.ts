export const roleShowForm = ref(false);
import type { SystemRole } from '@/api/modules/system/role/types';
import type { Rule } from 'ant-design-vue/es/form/interface';

const form: SystemRole = {
  roleId: 0,
  roleName: '',
  roleKey: '',
  roleSort: 0,
  dataScope: '',
  menuCheckStrictly: false,
  deptCheckStrictly: false,
  status: '',
  delFlag: '',
  createBy: '',
  createTime: null,
  updateBy: '',
  updateTime: null,
  remark: '',
  flag: false,
  menuIds: [],
  admin: false,
};

// 当前选中的一项，用于删除，编辑
export const roleForm = ref<SystemRole>({
  ...form,
});
export const resourceModal = ref(false);
export const showRoleForm = ref(false);
// 重置表格
export const roleResetForm = () => {
  roleForm.value = {
    ...form,
  };
};

// 表格校验
export const roleRules: Record<string, Rule[]> = {
  roleName: [{ required: true, trigger: 'change' }],
  roleKey: [{ required: true, trigger: 'change' }],
  roleSort: [{ required: true, trigger: 'change' }],
  menuCheckStrictly: [{ required: false, trigger: 'change' }],
  deptCheckStrictly: [{ required: false, trigger: 'change' }],
  status: [{ required: true, trigger: 'change' }],
  remark: [{ required: false, trigger: 'change' }],
};
