import { deleteNotice, fetchNoticeById, fetchNoticeList } from '@/api/modules/system/notice/notice';
import { response } from '@/utils/table/table';
import { noticeForm, noticeResetForm, noticeShowForm } from './form';
import { noticeKeys, noticeQuery, noticeTable } from './table';

export const noticeList = async () => {
  noticeTable.value.loading = true;
  const { data } = await fetchNoticeList(noticeQuery.value);
  noticeTable.value.data = data.rows;
  noticeQuery.value.total = data.total;
  noticeTable.value.loading = false;
};

export const noticeEdit = async (id?: number) => {
  let targetId: number = id ? id : noticeKeys.value[0];
  noticeTable.value.loading = true;
  const { data } = await fetchNoticeById(targetId);
  if (data.data) {
    noticeForm.value = data.data;
    noticeShowForm.value = true;
  }
  noticeTable.value.loading = false;
};

export const noticeCreate = async () => {
  noticeResetForm();
  noticeShowForm.value = true;
};

export const noticeDelete = async (id?: number) => {
  let ids = id ? [id] : noticeKeys.value;
  await response(deleteNotice, ids);
  await noticeList();
  noticeKeys.value = [];
};
