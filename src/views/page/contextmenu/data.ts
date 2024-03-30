import { useElementBounding } from '@vueuse/core';
import type { ItemType } from 'ant-design-vue';

interface SystemContextMenu {
  show: boolean;
  items: ItemType[];
  x?: number;
  y?: number;
  data?: any;
  element?: HTMLElement;
}

export const contextMenu = ref<SystemContextMenu>({
  show: false,
  items: [],
  x: 0,
  y: 0,
  data: undefined,
});
export const setContextMenu = (data: SystemContextMenu) => {
  console.log(data);
  contextMenu.value = data;
  /* 当传入dom时，挂到dom上 */
  if (data.element) {
    const { left, top } = useElementBounding(data.element);

    contextMenu.value.x = left.value;
    contextMenu.value.x = top.value;
  } else {
    // 跟随鼠标移动
    const e = window.event as MouseEvent;
    contextMenu.value.x = e.x;
    contextMenu.value.y = e.y;
  }
};
