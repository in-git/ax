export const typeShowForm = ref(false);
import type { Rule } from 'ant-design-vue/es/form/interface';

const form: SystemDict = {
  dictId: 0,
  dictName: '',
  dictType: '',
  createBy: '',
  createTime: undefined,
  updateBy: '',
  updateTime: undefined,
  remark: '',
  status: '0',
};

// 当前选中的一项，用于删除，编辑
export const typeForm = ref<SystemDict>({
  ...form,
});

// 重置表格
export const typeResetForm = () => {
  typeForm.value = {
    ...form,
  };
};

// 表格校验
export const typeRules: Record<string, Rule[]> = {
  dictName: [{ required: false, trigger: 'change' }],
  dictType: [{ required: false, trigger: 'change' }],
  status: [{ required: false, trigger: 'change' }],
  remark: [{ required: false, trigger: 'change' }],
};
export const showDictData = ref(false);
