export const postShowForm = ref(false);
import type {  SystemPost } from '@/api/modules/system/post/types';
import type { Rule } from 'ant-design-vue/es/form/interface';

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

export const postForm = ref<SystemPost>({
  ...form,
});

export const postResetForm = () => {
  postForm.value = {
    ...form,
  };
};

export const postRules: Record<string, Rule[]> = {
  postCode: [{ required: true, trigger: 'change' }],
  postName: [{ required: true, trigger: 'change' }],
  postSort: [{ required: true, trigger: 'change' }],
  status: [{ required: true, trigger: 'change' }],
  remark: [{ required: false , trigger: 'change' }],
};
