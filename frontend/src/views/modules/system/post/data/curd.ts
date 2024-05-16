import { postResetForm, postShowForm,postForm } from './form';
import { postKeys, postQuery, postTable } from './table';
import {
  deletePost,
  fetchPostById ,
  fetchPostList,
  exportPost
} from '@/api/modules/system/post/post';
import { response } from '@/utils/table/table';

export const postList = async () => {
  try {
     postTable.value.loading = true;
      const { data } = await fetchPostList(postQuery.value);
      postTable.value.data = data.rows;
      postQuery.value.total = data.total;
      postTable.value.loading = false;
  } catch (error) {
    postTable.value.loading = false;
  }

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
   postKeys.value=[]
};

// 导出EXCEL文件
export const postExport = () => {
  return exportPost({
    pageNum: postQuery.value.pageNum,
    pageSize: postQuery.value.pageSize,
  });
};
