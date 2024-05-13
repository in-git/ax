export const dataShowForm = ref(false);
import type { Rule } from 'ant-design-vue/es/form/interface';

const form: SystemDictData = {
  dictCode: 0,
  dictSort: 0,
  dictLabel: '',
  dictValue: '',
  dictType: '',
  cssClass: '',
  listClass: '',
  isDefault: '',
  createBy: '',
  createTime: undefined,
  updateBy: '',
  updateTime: undefined,
  remark: '',
  status: '0',
};

// 当前选中的一项，用于删除，编辑
export const dataForm = ref<SystemDictData>({
  ...form,
});

// 重置表格
export const dataResetForm = () => {
  dataForm.value = {
    ...form,
  };
};

// 表格校验
export const dataRules: Record<string, Rule[]> = {
  dictCode: [{ required: false, trigger: 'change' }],
  dictSort: [{ required: false, trigger: 'change' }],
  dictLabel: [{ required: false, trigger: 'change' }],
  dictValue: [{ required: false, trigger: 'change' }],
  dictType: [{ required: false, trigger: 'change' }],
  listClass: [{ required: false, trigger: 'change' }],
  isDefault: [{ required: false, trigger: 'change' }],
  status: [{ required: false, trigger: 'change' }],
  remark: [{ required: false, trigger: 'change' }],
};
