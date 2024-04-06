import { deletePost, getPost, postList } from '@/api/modules/system/post/post';
import { confirm } from '@/utils/table/table';
import { message } from 'ant-design-vue';
import { postForm, resetPostForm, showPostForm } from './form';
import { postKeys, postQuery, postTable } from './table';

export const loadPostList = async () => {
  postTable.value.loading = true;
  const { data } = await postList(postQuery.value);
  postTable.value.data = data.rows;
  postQuery.value.total = data.total;
  postTable.value.loading = false;
};

export const delPost = (id?: number) => {
  confirm(async () => {
    let ids = [];
    ids = !!id ? [id] : postKeys.value;
    const { data } = await deletePost(ids);
    message.success(data.msg);
  });
};

export const editPost = async (id?: number) => {
  let targetId = -1;
  targetId = !!id ? id : postKeys.value[0];
  const { data } = await getPost(targetId);
  if (data.data) {
    postForm.value = data.data;
    showPostForm.value = true;
  }
};
export const createPost = () => {
  resetPostForm();
  showPostForm.value = true;
};
