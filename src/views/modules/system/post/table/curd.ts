import { postList } from '@/api/modules/system/post/post';
import { postQuery, postTable } from './data';

export const loadPostList = async () => {
  postTable.value.loading = true;
  const { data } = await postList(postQuery.value);
  postTable.value.data = data.rows;
  postQuery.value.total = data.total;
  postTable.value.loading = false;
};
