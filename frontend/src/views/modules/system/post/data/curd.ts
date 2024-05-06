import { deletePost, fetchPostById, fetchPostList } from '@/api/modules/system/post/post';
import { response } from '@/utils/table/table';
import { postForm, postResetForm, postShowForm } from './form';
import { postKeys, postQuery, postTable } from './table';

export const postList = async () => {
  postTable.value.loading = true;
  const { data } = await fetchPostList(postQuery.value);
  postTable.value.data = data.rows;
  postQuery.value.total = data.total;
  postTable.value.loading = false;
};

export const postEdit = async (id?: number) => {
  let targetId: number = id ? id : postKeys.value[0];
  postTable.value.loading = true;
  const { data } = await fetchPostById(targetId);
  if (data.data) {
    postForm.value = data.data;
    postShowForm.value = true;
  }
  postTable.value.loading = false;
};

export const postCreate = async () => {
  postResetForm();
  postShowForm.value = true;
};

export const postDelete = async (id?: number) => {
  let ids = id ? [id] : postKeys.value;
  await response(deletePost, ids);
  await postList();
  postKeys.value = [];
};
