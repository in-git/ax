import type { SystemTest } from '@/api/modules/system/test/types';
import { testColumns } from './column';
import { testKeys, testTable } from './table';

interface CardData {
  id: number;
  raw?: SystemTest;
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
export const selectSystemTest = (item: CardData) => {
  if (!testKeys.value.includes(item.id)) {
    testKeys.value.push(item.id);
  } else {
    testKeys.value = testKeys.value.filter(e => e !== item.id);
  }
};

/* 渲染卡片的内容 */
export const testCardData = computed(() => {
  let arr: CardData[] = [];
  testTable.value.data.map((e: SystemTest | any, i) => {
    let items: any = [];
    testColumns.value.forEach((v: any, k) => {
      const label = v.title;
      const value = e[v.dataIndex as any];
      if (v.dataIndex === 'operation') return;
      items.push({
        label,
        value,
      });
    });
    arr.push({
      id: e['testId'],
      items,
      raw: e,
    });
  });
  return arr;
});
