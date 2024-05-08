/**
 * @description 鼠标拖拽的效果
 * @example <div v-dragEffect data-drag-effect/>
 */
export default {
  created(el: HTMLElement) {
    el.ondragenter = () => {
      el?.classList.add('drag-effect');
    };
    el.ondragleave = () => {
      el?.classList.remove('drag-effect');
    };
    el.onmouseleave = () => {
      el?.classList.remove('drag-effect');
    };
  },
};
