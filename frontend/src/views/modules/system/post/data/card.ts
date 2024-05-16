import type { SystemPost } from '@/api/modules/system/post/types';
import { postColumns } from './column';
import { postKeys, postTable } from './table';

type CardItem = {
  label: string;
  value: any;
};
interface CardData {
  id: number;
  raw?: SystemPost;
  items: CardItem[];
}

/**
 * @description: 拖拽开始，用于设置拖拽前的值
 * @param {CardData} item
 */
export const dragstart = (item: CardData) => {
  // 待完善逻辑
};

/**
 * @description: 拖拽结束
 * @param {CardData} item
 */
export const drop = (item: CardData) => {
  // 待完善逻辑
};

/**
 * @description: 单击选择卡片
 * @param {CardData} item 当前选择的值
 */
export const selectSystemPost = (item: CardData) => {
  if (!postKeys.value.includes(item.id)) {
    postKeys.value.push(item.id);
  } else {
    postKeys.value = postKeys.value.filter(e => e !== item.id);
  }
};

/**
 * @description:
 *  卡片的内容，以ID作为唯一索引
 *  最多展示4项
 *  这段代码不建议修改，有需要则重写
 */
export const postCardData = computed(() => {
  let arr: CardData[] = [];
  postTable.value.data.map((e: SystemPost | any, i) => {
    let items: any = [];
    postColumns.value.forEach((v: any, k) => {
      const label = v.title;
      const value = e[v.dataIndex as any];
      if (v.dataIndex === 'operation') return;
      if (k < 4) {
        items.push({
          label,
          value,
        });
      }
    });
    arr.push({
      id: e['postId'],
      items,
      raw: e,
    });
  });
  return arr;
});
