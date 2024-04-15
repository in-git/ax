import { postColumns } from './column';
import { postKeys, postTable } from './table';
import type {  SystemPost } from '@/api/modules/system/post/types';

interface CardData {
  id: number;
  raw?: SystemPost;
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
export const selectSystemPost = (item: CardData) => {
  if (!postKeys.value.includes(item.id)) {
    postKeys.value.push(item.id);
  } else {
    postKeys.value = postKeys.value.filter(e => e !== item.id);
  }
};

/* 渲染卡片的内容 */
export const postCardData = computed(() => {
  let arr: CardData[] = [];
  postTable.value.data.map((e: SystemPost | any, i) => {
    let items: any = [];
    postColumns.value.forEach((v: any, k) => {
      const label = v.title;
      const value = e[v.dataIndex as any];
      if (v.dataIndex === 'operation') return;
      items.push({
        label,
        value,
      });
    });
    arr.push({
      id: e['postId'],
      items,
      raw: e,
    });
  });
  return arr;
});
