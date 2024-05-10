import type { SystemMemo } from '@/api/modules/system/memo/types';
import { memoColumns } from './column';
import { memoKeys, memoTable } from './table';

interface CardData {
  id: number;
  raw?: SystemMemo;
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
export const selectSystemMemo = (item: CardData) => {
  if (!memoKeys.value.includes(item.id)) {
    memoKeys.value.push(item.id);
  } else {
    memoKeys.value = memoKeys.value.filter(e => e !== item.id);
  }
};

/* 渲染卡片的内容 */
export const memoCardData = computed(() => {
  let arr: CardData[] = [];
  memoTable.value.data.map((e: SystemMemo | any, i) => {
    let items: any = [];
    memoColumns.value.forEach((v: any, k) => {
      const label = v.title;
      const value = e[v.dataIndex as any];
      if (v.dataIndex === 'operation') return;
      items.push({
        label,
        value,
      });
    });
    arr.push({
      id: e['memoId'],
      items,
      raw: e,
    });
  });
  return arr;
});
