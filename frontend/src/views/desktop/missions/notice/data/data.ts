import { fetchNoticeList } from '@/api/modules/system/notice/notice';
import { useTimeAgo } from '@vueuse/core';
import { message } from 'ant-design-vue';
import type { DesktopNotice } from './type';

export const showNotice = ref(false);
export const noticeLoading = ref(false);
export const noticeList = ref<DesktopNotice[]>([]);

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

/**
 * @description: 获取系统通知
 */
export const getSystemNotice = async () => {
  noticeLoading.value = true;
  try {
    const { data } = await fetchNoticeList({
      pageNum: 1,
      pageSize: 30,
      total: 0,
    });
    noticeLoading.value = false;
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
  } catch (error) {
    noticeLoading.value = false;
    message.warn('获取通知遇到点问题，请检查权限');
  }
};
