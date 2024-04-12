import type { SystemWebsite } from '@/api/modules/system/website/types';
import { websiteColumns } from './column';
import { websiteKeys, websiteTable } from './table';

interface CardData {
  id: number;
  raw?: SystemWebsite;
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
export const selectSystemWebsite = (item: CardData) => {
  if (!websiteKeys.value.includes(item.id)) {
    websiteKeys.value.push(item.id);
  } else {
    websiteKeys.value = websiteKeys.value.filter(e => e !== item.id);
  }
};

/* 渲染卡片的内容 */
export const systemWebsiteCardData = computed(() => {
  let arr: CardData[] = [];
  websiteTable.value.data.map((e: SystemWebsite | any, i) => {
    let items: any = [];
    websiteColumns.value.forEach((v: any, k) => {
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
