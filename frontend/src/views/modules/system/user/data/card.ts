import type { UserProfileData } from '@/api/modules/system/user/types';
import { userColumns } from './column';
import { userKeys, userTable } from './table';

type CardItem = {
  label: string;
  value: any;
};
interface CardData {
  id: number;
  raw?: UserProfileData;
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
export const selectSystemUser = (item: CardData) => {
  if (!userKeys.value.includes(item.id)) {
    userKeys.value.push(item.id);
  } else {
    userKeys.value = userKeys.value.filter(e => e !== item.id);
  }
};

/**
 * @description:
 *  卡片的内容，以ID作为唯一索引
 *  最多展示4项
 *  这段代码不建议修改，有需要则重写
 */
export const userCardData = computed(() => {
  let arr: CardData[] = [];
  userTable.value.data.map((e: UserProfileData | any, i) => {
    let items: any = [];
    userColumns.value.forEach((v: any, k) => {
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
      id: e['userId'],
      items,
      raw: e,
    });
  });
  return arr;
});
