import type {  SystemPost } from '@/api/modules/system/post/types';
import type { Rule } from 'ant-design-vue/es/form/interface';

export const postShowForm = ref(false);
const form:  SystemPost = {
    postId: 0 ,
    postCode: "" ,
    postName: "" ,
    postSort: 0 ,
    status: "" ,
    createBy: "" ,
    createTime: null ,
    updateBy: "" ,
    updateTime: null ,
    remark: "" ,
};

// 当前选中的一项，用于删除，编辑
export const postForm = ref<SystemPost>({
  ...form,
});

// 重置表格
export const postResetForm = () => {
  postForm.value = {
    ...form,
  };
};

// 表格校验
export const postRules: Record<string, Rule[]> = {
  postCode: [{ required: true, trigger: 'change' }],
  postName: [{ required: true, trigger: 'change' }],
  postSort: [{ required: true, trigger: 'change' }],
  status: [{ required: true, trigger: 'change' }],
  remark: [{ required: false , trigger: 'change' }],
};
