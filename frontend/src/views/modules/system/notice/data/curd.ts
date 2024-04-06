import { getNotice, listNotice } from '@/api/modules/system/notice/notice';
import { noticeForm, showNoticeForm } from './form';
import { noticeKeys, noticeQuery, noticeTable } from './table';

export const noticeList = async () => {
  noticeTable.value.loading = true;
  const { data } = await listNotice(noticeQuery.value);
  noticeTable.value.data = data.rows;
  noticeTable.value.loading = false;
  noticeQuery.value.total = data.total;
};

export const editNotice = async (item: SystemNotice, id: number) => {
  let targetId = id ? id : noticeKeys.value[0];
  noticeForm.value = item;

  console.log(item.noticeId);

  const { data } = await getNotice(targetId);
  if (data.data) {
    noticeForm.value = data.data;
    showNoticeForm.value = true;
  }
};
