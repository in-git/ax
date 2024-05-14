import { fetchNoticeList } from '@/api/modules/system/notice/notice';
import { useTimeAgo } from '@vueuse/core';
import type { DesktopNotice } from './type';

export const showNotice = ref(false);

export const noticeList = ref<DesktopNotice[]>([
  {
    content: '一条通知',
    title: '通知标题',
    type: 'system',
    id: '',
    time: '2024年5月14日',
    color: 'green',
  },
]);

/**
 * @description:
 *  触发通知，弹出通知栏
 *  任何通知必须转成 {DesktopNotice} 接口再发送
 * @param {DesktopNotice} item
 */
export const triggerNotice = (item: DesktopNotice) => {
  noticeList.value.unshift(item);
  showNotice.value = true;
};
/* 当前通知的类型，用于区分不同通知 */
export const currentNoticeType = ref('');
export const getSystemNotice = async () => {
  const { data } = await fetchNoticeList({
    pageNum: 1,
    pageSize: 30,
    total: 0,
  });
  noticeList.value = data.rows.map((e): DesktopNotice => {
    return {
      color: 'green',
      title: e.noticeTitle,
      content: e.noticeContent,
      type: 'system',
      id: e.noticeId,
      time: useTimeAgo(e.createTime).value || e.createTime,
    };
  });
};
