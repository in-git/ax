export const testShowForm = ref(false);
import type {  SystemTest } from '@/api/modules/system/test/types';
import type { Rule } from 'ant-design-vue/es/form/interface';

const form:  SystemTest = {
    testId: 0 ,
    textField: "" ,
    numberField: 0 ,
    dateField: null ,
    richTextField: "" ,
    selectField: "" ,
    booleanField: "" ,
    createTime: null ,
    updateTime: null ,
    textareaField: "" ,
    treeField: "" ,
};

// 当前选中的一项，用于删除，编辑
export const testForm = ref<SystemTest>({
  ...form,
});

// 重置表格
export const testResetForm = () => {
  testForm.value = {
    ...form,
  };
};

// 表格校验
export const testRules: Record<string, Rule[]> = {
  textField: [{ required: false , trigger: 'change' }],
  numberField: [{ required: false , trigger: 'change' }],
  dateField: [{ required: false , trigger: 'change' }],
  richTextField: [{ required: false , trigger: 'change' }],
  selectField: [{ required: false , trigger: 'change' }],
  booleanField: [{ required: false , trigger: 'change' }],
  createTime: [{ required: false , trigger: 'change' }],
  updateTime: [{ required: false , trigger: 'change' }],
  textareaField: [{ required: false , trigger: 'change' }],
  treeField: [{ required: false , trigger: 'change' }],
};
