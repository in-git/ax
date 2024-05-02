import type { SystemRole } from '@/api/modules/system/role/types';
import { roleColumns } from './column';
import { roleKeys, roleTable } from './table';

interface CardData {
  id: number;
  raw?: SystemRole;
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
export const selectSystemRole = (item: CardData) => {
  if (!roleKeys.value.includes(item.id)) {
    roleKeys.value.push(item.id);
  } else {
    roleKeys.value = roleKeys.value.filter(e => e !== item.id);
  }
};

/* 渲染卡片的内容 */
export const roleCardData = computed(() => {
  let arr: CardData[] = [];
  roleTable.value.data.map((e: SystemRole | any, i) => {
    let items: any = [];
    roleColumns.value.forEach((v: any, k) => {
      const label = v.title;
      const value = e[v.dataIndex as any];
      if (v.dataIndex === 'operation') return;
      items.push({
        label,
        value,
      });
    });
    arr.push({
      id: e['roleId'],
      items,
      raw: e,
    });
  });
  return arr;
});
