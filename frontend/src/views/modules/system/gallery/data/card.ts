import { galleryColumns } from './column';
import { galleryKeys, galleryTable } from './table';
import type {  SystemGallery } from '@/api/modules/system/gallery/types';

interface CardData {
  id: number;
  raw?: SystemGallery;
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
export const selectSystemGallery = (item: CardData) => {
  if (!galleryKeys.value.includes(item.id)) {
    galleryKeys.value.push(item.id);
  } else {
    galleryKeys.value = galleryKeys.value.filter(e => e !== item.id);
  }
};

/* 渲染卡片的内容 */
export const galleryCardData = computed(() => {
  let arr: CardData[] = [];
  galleryTable.value.data.map((e: SystemGallery | any, i) => {
    let items: any = [];
    galleryColumns.value.forEach((v: any, k) => {
      const label = v.title;
      const value = e[v.dataIndex as any];
      if (v.dataIndex === 'operation') return;
      items.push({
        label,
        value,
      });
    });
    arr.push({
      id: e['galleryId'],
      items,
      raw: e,
    });
  });
  return arr;
});
