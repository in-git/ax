import { dataColumns } from './column';
import { dataKeys, dataTable } from './table';

interface CardData {
  id: number;
  raw?: SystemDictData;
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
export const selectSystemData = (item: CardData) => {
  if (!dataKeys.value.includes(item.id)) {
    dataKeys.value.push(item.id);
  } else {
    dataKeys.value = dataKeys.value.filter(e => e !== item.id);
  }
};

/* 渲染卡片的内容 */
export const dataCardData = computed(() => {
  let arr: CardData[] = [];
  dataTable.value.data.map((e: SystemDictData | any, i) => {
    let items: any = [];
    dataColumns.value.forEach((v: any, k) => {
      const label = v.title;
      const value = e[v.dataIndex as any];
      if (v.dataIndex === 'operation') return;
      items.push({
        label,
        value,
      });
    });
    arr.push({
      id: e['dictCode'],
      items,
      raw: e,
    });
  });
  return arr;
});
