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

export const dragstart = (item: CardData) => {
  /* 当前拖拽的元素 */
  console.log('dragstart==', item.id);
};

export const drop = (item: CardData) => {
  /* 目标元素，鼠标放下 */
  console.log('drop==', item.id);
};

export const selectSystemWebsite = (item: CardData) => {
  if (!websiteKeys.value.includes(item.id)) {
    websiteKeys.value.push(item.id);
  } else {
    websiteKeys.value = websiteKeys.value.filter(e => e !== item.id);
  }
};

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
