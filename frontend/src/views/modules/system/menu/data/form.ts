import type { SystemMenu } from '@/api/modules/system/menu/types';
import type { Rule } from 'ant-design-vue/es/form/interface';

export const menuShowForm = ref(false);
const form: SystemMenu = {
  menuId: 0,
  menuName: '',
  parentId: 0,
  orderNum: 0,
  path: '',
  component: '',
  query: '',
  isFrame: '0',
  isCache: 0,
  menuType: 'M',
  visible: '',
  status: '',
  perms: '',
  icon: '',
  createBy: '',
  createTime: null,
  updateBy: '',
  updateTime: null,
  remark: '',
};

// 当前选中的一项，用于删除，编辑
export const menuForm = ref<SystemMenu>({
  ...form,
});

// 重置表格
export const menuResetForm = () => {
  menuForm.value = {
    ...form,
  };
};

// 表格校验
export const menuRules: Record<string, Rule[]> = {
  menuName: [{ required: true, trigger: 'change' }],
  orderNum: [{ required: false, trigger: 'change' }],
  path: [{ required: false, trigger: 'change' }],
  component: [{ required: false, trigger: 'change' }],
  query: [{ required: false, trigger: 'change' }],
};
