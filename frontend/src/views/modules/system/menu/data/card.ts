import type { SystemMenu } from '@/api/modules/system/menu/types';
import { menuColumns } from './column';
import { menuKeys, menuTable } from './table';

type CardItem = {
  label: string;
  value: any;
};
interface CardData {
  id: number;
  raw?: SystemMenu;
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
export const selectSystemMenu = (item: CardData) => {
  if (!menuKeys.value.includes(item.id)) {
    menuKeys.value.push(item.id);
  } else {
    menuKeys.value = menuKeys.value.filter(e => e !== item.id);
  }
};

/**
 * @description:
 *  卡片的内容，以ID作为唯一索引
 *  最多展示4项
 *  这段代码不建议修改，有需要则重写
 */
export const menuCardData = computed(() => {
  let arr: CardData[] = [];
  menuTable.value.data.map((e: SystemMenu | any, i) => {
    let items: any = [];
    menuColumns.value.forEach((v: any, k) => {
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
      id: e['menuId'],
      items,
      raw: e,
    });
  });
  return arr;
});
