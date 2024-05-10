import type { SystemDept } from '@/api/modules/system/dept/types';
import { deptColumns } from './column';
import { deptKeys, deptTable } from './table';

interface CardData {
  id: number;
  raw?: SystemDept;
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
export const selectSystemDept = (item: CardData) => {
  if (!deptKeys.value.includes(item.id)) {
    deptKeys.value.push(item.id);
  } else {
    deptKeys.value = deptKeys.value.filter(e => e !== item.id);
  }
};

/* 渲染卡片的内容 */
export const deptCardData = computed(() => {
  let arr: CardData[] = [];
  deptTable.value.data.map((e: SystemDept | any, i) => {
    let items: any = [];
    deptColumns.value.forEach((v: any, k) => {
      const label = v.title;
      const value = e[v.dataIndex as any];
      if (v.dataIndex === 'operation') return;
      items.push({
        label,
        value,
      });
    });
    arr.push({
      id: e['deptId'],
      items,
      raw: e,
    });
  });
  return arr;
});
