export const feedbackShowForm = ref(false);
import type {  SystemFeedback } from '@/api/modules/system/feedback/types';
import type { Rule } from 'ant-design-vue/es/form/interface';

const form:  SystemFeedback = {
    feedbackId: 0 ,
    feedbackContent: "" ,
    type: "" ,
    nickname: "" ,
    createTime: null ,
    updateTime: null ,
    deptId: 0 ,
};

// 当前选中的一项，用于删除，编辑
export const feedbackForm = ref<SystemFeedback>({
  ...form,
});

// 重置表格
export const feedbackResetForm = () => {
  feedbackForm.value = {
    ...form,
  };
};

// 表格校验
export const feedbackRules: Record<string, Rule[]> = {
  feedbackContent: [{ required: true, trigger: 'change' }],
  type: [{ required: false , trigger: 'change' }],
  nickname: [{ required: false , trigger: 'change' }],
};
