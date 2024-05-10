import type { SystemConfig } from '@/api/modules/system/config/types';
import { configColumns } from './column';
import { configKeys, configTable } from './table';

interface CardData {
  id: number;
  raw?: SystemConfig;
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
      id: e.configId,
      items,
      raw: e,
    });
  });
  return arr;
});
