<template>
  <div v-if="selectionConfig.show">
    <div ref="selectionRef" class="selection" :style="style">
      <!--
     使用：
     在父元素添加 data-selection-area 属性
     在子元素添加 data-selection =${id}
  -->
      <!--  -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { intersect } from '@/utils/common/utils';
import { computed, nextTick, onMounted, onUnmounted, ref, type CSSProperties } from 'vue';
import { selectionKeys } from './data';

type Selection = {
  left: number;
  top: number;
  show: boolean;
  width: number;
  height: number;
};

const selectionRef = ref<HTMLDivElement>();
const selectionConfig = ref<Selection>({
  left: 0,
  top: 0,
  show: false,
  width: 0,
  height: 0,
});

const clear = () => {
  document.onmouseup = null;
  document.onmousemove = null;
  selectionConfig.value.width = 0;
  selectionConfig.value.height = 0;
};

const onmousedown = (event: MouseEvent) => {
  const startX = event.x;
  const startY = event.y;
  document.body.style.userSelect = 'none';
  const targetDom = event.target as HTMLElement;
  if (!targetDom.hasAttribute('data-selection')) {
    selectionKeys.value.clear();
  }

  if (!targetDom.hasAttribute('data-selection-area')) {
    return;
  }
  selectionConfig.value.show = true;
  const onmousemove = (e: MouseEvent) => {
    const width = e.x - startX;
    const height = e.y - startY;
    const targets = document.querySelectorAll('[data-selection]');

    if (targets.length === 0) {
      return;
    }

    nextTick(() => {
      const domEl = selectionRef.value;
      if (!domEl) return;
      const r2 = domEl.getBoundingClientRect();
      Array.from(targets).forEach(element => {
        const r1 = element.getBoundingClientRect();
        const targetId = element.getAttribute('data-selection') || '';
        if (intersect(r1, r2)) {
          selectionKeys.value.add(targetId);
        } else {
          selectionKeys.value.delete(targetId);
        }
      });
    });

    selectionConfig.value.left = width < 0 ? startX + width : startX;
    selectionConfig.value.top = height < 0 ? startY + height : startY;
    selectionConfig.value.width = Math.abs(width);
    selectionConfig.value.height = Math.abs(height);
  };

  const onmouseup = () => {
    document.removeEventListener('mousemove', onmousemove);
    document.removeEventListener('mouseup', onmouseup);

    selectionConfig.value.show = false;
    selectionConfig.value.width = 0;
    selectionConfig.value.height = 0;
    selectionConfig.value.left = 0;
    selectionConfig.value.top = 0;

    document.body.style.userSelect = 'initial';
  };
  document.addEventListener('mousemove', onmousemove);
  document.addEventListener('mouseup', onmouseup);
};

onMounted(() => {
  document.addEventListener('mousedown', onmousedown);
});

onUnmounted(() => {
  clear();
});
const style = computed((): CSSProperties => {
  return {
    left: `${selectionConfig.value.left}px`,
    top: `${selectionConfig.value.top}px`,
    width: `${selectionConfig.value.width}px`,
    height: `${selectionConfig.value.height}px`,
  };
});
</script>

<style lang="scss" scoped>
.selection {
  position: fixed;
  z-index: 1000;
  background-color: #ddeafc65;
  border: 1px solid var(--primary);
}
</style>
