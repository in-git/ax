import { range } from '@/utils/common/utils';

/* 使用:
    需要在元素上添加 data-drag就能拖动
    <div v-draggable>
        <div data-drag>这里是拖拽区域</div>
        <div>这里是内容区域</div>
    </div>
*/
export default {
  mounted(el: HTMLElement) {
    el.style.userSelect = 'none';
    el.onmousedown = (ev: MouseEvent) => {
      const target = ev.target as HTMLElement;
      if (!target.hasAttribute('data-drag')) return;
      // 鼠标按下的位置
      const mouseXStart = ev.clientX;
      const mouseYStart = ev.clientY;
      // 当前滑块位置
      const rectLeft = el.offsetLeft;
      const rectTop = el.offsetTop;
      el.classList.add('core-drag-start');
      document.onmousemove = e => {
        // 鼠标移动的位置
        const mouseXEnd = e.clientX;
        const mouseYEnd = e.clientY;
        const moveX = mouseXEnd - mouseXStart + rectLeft;
        const { top, width, height, left } = el.getBoundingClientRect();
        const moveY = mouseYEnd - mouseYStart + rectTop;
        el.style.top = `${moveY}px`;
        el.style.left = `${moveX}px`;
        if (
          moveX < 0 ||
          moveY < 0 ||
          moveX + width > window.innerWidth ||
          moveY + height > window.innerHeight
        ) {
          el.style.opacity = '0.8';
        } else {
          el.style.opacity = 'initial';
        }
      };
      document.onmouseup = () => {
        // 取消事件
        document.onmousemove = null;
        const { top, width, height, left } = el.getBoundingClientRect();
        el.style.top = `${range(top, 0, window.innerHeight - 100)}px`;
        el.style.left = `${range(left, -width + 100, window.innerWidth - 100)}px`;
        el.style.opacity = 'initial';
        el.classList.remove('core-drag-start');
      };
    };
  },
};
