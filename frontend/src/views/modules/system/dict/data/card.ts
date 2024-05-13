import { typeColumns } from './column';
import { typeKeys, typeTable } from './table';

interface CardData {
  id: number;
  raw?: SystemDict;
  items: {
    label: string;
    value: any;
  }[];
}

/* 当前拖拽的元素 */
export const dragstart = (item: CardData) => {
  // 鼠标拖拽触发
};

/* 目标元素，鼠标放下 */
export const drop = (item: CardData) => {
  // 鼠标拖拽放下触发
};

/* 选择卡片 */
export const selectSystemType = (item: CardData) => {
  if (!typeKeys.value.includes(item.id)) {
    typeKeys.value.push(item.id);
  } else {
    typeKeys.value = typeKeys.value.filter(e => e !== item.id);
  }
};

/* 渲染卡片的内容 */
export const typeCardData = computed(() => {
  let arr: CardData[] = [];
  typeTable.value.data.map((e: SystemDict | any, i) => {
    let items: any = [];
    typeColumns.value.forEach((v: any, k) => {
      const label = v.title;
      const value = e[v.dataIndex as any];
      if (v.dataIndex === 'operation') return;
      items.push({
        label,
        value,
      });
    });
    arr.push({
      id: e['dictId'],
      items,
      raw: e,
    });
  });
  return arr;
});
