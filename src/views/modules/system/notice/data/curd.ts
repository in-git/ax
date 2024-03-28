import { getNotice, listNotice } from '@/api/modules/system/notice/notice';
import { showNoticeForm } from './form';
import { noticeKeys, noticeQuery, noticeTable } from './table';

export const noticeList = async () => {
  noticeTable.value.loading = true;
  const { data } = await listNotice(noticeQuery.value);
  noticeTable.value.data = data.rows;
  noticeTable.value.loading = false;
  noticeQuery.value.total = data.total;
};

export const editNotice = async (id: number) => {
  let targetId = id ? id : noticeKeys.value[0];
  await getNotice(targetId);
  showNoticeForm.value = true;
};
