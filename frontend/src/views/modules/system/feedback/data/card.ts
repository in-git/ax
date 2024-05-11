import type { SystemFeedback } from '@/api/modules/system/feedback/types';
import { feedbackColumns } from './column';
import { feedbackKeys, feedbackTable } from './table';

interface CardData {
  id: number;
  raw?: SystemFeedback;
  items: {
    label: string;
    value: any;
  }[];
}

/* 当前拖拽的元素 */
export const dragstart = (item: CardData) => {};

/* 目标元素，鼠标放下 */
export const drop = (item: CardData) => {};

/* 选择卡片 */
export const selectSystemFeedback = (item: CardData) => {
  if (!feedbackKeys.value.includes(item.id)) {
    feedbackKeys.value.push(item.id);
  } else {
    feedbackKeys.value = feedbackKeys.value.filter(e => e !== item.id);
  }
};

/* 渲染卡片的内容 */
export const feedbackCardData = computed(() => {
  let arr: CardData[] = [];
  feedbackTable.value.data.map((e: SystemFeedback | any, i) => {
    let items: any = [];
    feedbackColumns.value.forEach((v: any, k) => {
      const label = v.title;
      const value = e[v.dataIndex as any];
      if (v.dataIndex === 'operation') return;
      items.push({
        label,
        value,
      });
    });
    arr.push({
      id: e['feedbackId'],
      items,
      raw: e,
    });
  });
  return arr;
});
