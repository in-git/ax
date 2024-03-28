import type { SystemPost } from '@/api/modules/system/post/types';

export const showPostForm = ref(false);

let form: SystemPost = {
  createBy: '',
  createTime: '',
  remark: '',
  postId: 0,
  postCode: '',
  postName: '',
  postSort: 0,
  status: '0',
  flag: false,
};
export const postForm = ref<SystemPost>({
  ...form,
});
export const resetPostForm = () => {
  postForm.value = {
    ...form,
  };
};
