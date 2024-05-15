
import { noticeColumns } from './column';
import { noticeKeys, noticeTable } from './table';
import type {  SystemNotice } from '@/api/modules/system/notice/types';

interface CardData {
  id: number;
  raw?: SystemNotice;
  items: {
    label: string;
    value: any;
  }[];
}

/* 当前拖拽的元素 */
export const dragstart = (item: CardData) => {
  // 鼠标拖拽触发
};

/* 目标元素，鼠标放下 */
export const drop = (item: CardData) => {
  // 鼠标拖拽放下触发
};

/* 选择卡片 */
export const selectSystemNotice = (item: CardData) => {
  if (!noticeKeys.value.includes(item.id)) {
    noticeKeys.value.push(item.id);
  } else {
    noticeKeys.value = noticeKeys.value.filter(e => e !== item.id);
  }
};

/* 渲染卡片的内容 */
export const noticeCardData = computed(() => {
  let arr: CardData[] = [];
  noticeTable.value.data.map((e: SystemNotice | any, i) => {
    let items: any = [];
    noticeColumns.value.forEach((v: any, k) => {
      const label = v.title;
      const value = e[v.dataIndex as any];
      if (v.dataIndex === 'operation') return;
      items.push({
        label,
        value,
      });
    });
    arr.push({
      id: e['noticeId'],
      items,
      raw: e,
    });
  });
  return arr;
});
