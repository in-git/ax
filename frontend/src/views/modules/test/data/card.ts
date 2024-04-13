import { configColumns } from './column';
import { configKeys, configTable } from './table';
import type {  SystemConfig } from '@/api/modules/system/config/types';

interface CardData {
  id: number;
  raw?: SystemConfig;
  items: {
    label: string;
    value: any;
  }[];
}

/* 当前拖拽的元素 */
export const dragstart = (item: CardData) => {
  console.log('dragstart==', item.id);
};

/* 目标元素，鼠标放下 */
export const drop = (item: CardData) => {
  console.log('drop==', item.id);
};

/* 选择卡片 */
export const selectSystemConfig = (item: CardData) => {
  if (!configKeys.value.includes(item.id)) {
    configKeys.value.push(item.id);
  } else {
    configKeys.value = configKeys.value.filter(e => e !== item.id);
  }
};

/* 渲染卡片的内容 */
export const configCardData = computed(() => {
  let arr: CardData[] = [];
  configTable.value.data.map((e: SystemConfig | any, i) => {
    let items: any = [];
    configColumns.value.forEach((v: any, k) => {
      const label = v.title;
      const value = e[v.dataIndex as any];
      if (v.dataIndex === 'operation') return;
      items.push({
        label,
        value,
      });
    });
    arr.push({
      id: e.websiteId,
      items,
      raw: e,
    });
  });
  return arr;
});
