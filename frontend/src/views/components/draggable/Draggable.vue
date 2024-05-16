<template>
  <VueDraggable
    v-model:w="windowProps.w"
    v-model:h="windowProps.h"
    :z="z"
    v-model:x="windowProps.x"
    v-model:y="windowProps.y"
    drag-handle=".drag-header"
    @dragstop="dragstop"
    @mousedown="moveTop"
    handles-type="borders"
    :minWidth="400"
    :minHeight="400"
    enableNativeDrag
    @resizestop="resizestop"
    @mouseup="onMouseup"
    :class="[dark ? 'window-dark' : '']"
    :id="id"
  >
    <a-card
      :bordered="false"
      :bodyStyle="{ padding: 0 }"
      class="drag-header"
      @dblclick="switchover"
    >
      <a-flex :align="'center'" :justify="'space-between'">
        <a-flex :align="'center'">
          <a-flex :align="'center'" :justify="'center'" class="win-icon">
            <img :draggable="false" :src="icon" width="20" height="20" v-if="icon" />
          </a-flex>

          <div>{{ title }}</div>
        </a-flex>
        <a-flex>
          <div class="system__icon" @click="hidden">
            <MinusOutlined />
          </div>
          <div class="system__icon" @click="minimize" v-if="isFullscreen">
            <CompressOutlined />
          </div>
          <div class="system__icon" @click="expand" v-else>
            <ExpandOutlined />
          </div>

          <div class="system__icon close" @click="close">
            <CloseOutlined />
          </div>
        </a-flex>
      </a-flex>
    </a-card>
    <div class="drag-content">
      <slot></slot>
    </div>
  </VueDraggable>
</template>

<script setup lang="ts">
import { hiddenWindow, setCurrentWindow, toTop, windowList } from '@/global/window/window';
import usePageStore from '@/store/page';
import { initModuleWH } from '@/store/page/utils';
import { CompressOutlined, ExpandOutlined, MinusOutlined } from '@ant-design/icons-vue';
import { useCloned } from '@vueuse/core';
import VueDraggable from 'draggable-resizable-vue3';

type DragType = {
  w?: number;
  h?: number;
  title?: string;
  z?: number;
  id?: string;
  resizable?: boolean;
  icon?: string;
  x?: number;
  y?: number;
};
const emit = defineEmits(['close']);
const pageStore = usePageStore();

const props = withDefaults(
  defineProps<{
    w?: number;
    h?: number;
    title: string;
    z?: number;
    id?: string;
    resizable?: boolean;
    icon?: string;
    x?: number;
    y?: number;
    dark?: boolean;
  }>(),
  {
    w: 1000,
    h: 700,
    resizable: false,
    y: 0,
    x: 0,
    dark: false,
  },
);
const onMouseup = () => {
  document.body.style.userSelect = 'text';
};
const moveTop = () => {
  document.body.style.userSelect = 'none';
  if (props.id) {
    setCurrentWindow(props.id);
    toTop(props.id);
  }
};
const close = () => {
  emit('close', props.id);
};
const offset = windowList.value.length * 40;
const maxHeight = window.innerHeight;
const isFullscreen = ref(false);

const windowProps = ref<DragType>({
  x: Math.floor(window.innerWidth / 2 - props.w / 2 + offset - 32),
  y: Math.floor(window.innerHeight / 2 - props.h / 2 + offset / 2),
  w: 1,
  h: 1,
});

/* 记录放大之前的数据，用于缩小后还原 */
let beforeExpandData: DragType = {
  w: 0,
  h: 0,
  x: 0,
  y: 0,
};
/* 最大化 */
const expand = () => {
  isFullscreen.value = !isFullscreen.value;
  beforeExpandData = useCloned(windowProps.value).cloned.value;
  windowProps.value.x = 0;
  windowProps.value.y = 0;
  windowProps.value.w = window.innerWidth;
  windowProps.value.h = window.innerHeight - 40;
};
/* 最小化 */
const minimize = () => {
  windowProps.value = beforeExpandData;
  isFullscreen.value = !isFullscreen.value;
};

const switchover = () => {
  !isFullscreen.value ? expand() : minimize();
};
/* 窗口隐藏 */
const hidden = () => {
  if (props.id) {
    hiddenWindow(props.id);
  }
};
/* 移动后记录最后的位置 */
const dragstop = (left: number, top: number) => {
  if (!windowProps.value.y) return;
  if (windowProps.value.y < 0) {
    windowProps.value.y = 0;
  }
  if (windowProps.value.y > maxHeight - 100) {
    windowProps.value.y = maxHeight - 100;
  }
  if (props.id) {
    initModuleWH(props.id);
    pageStore.$state.window[props.id].x = left;
    pageStore.$state.window[props.id].y = top;
  }

  windowProps.value.x = Math.round(windowProps.value.x!);
  windowProps.value.y = Math.round(windowProps.value.y);
};
/* 调整结束后记录窗口大小，作为默认值 */
const resizestop = (left: number, top: number, width: number, height: number) => {
  if (!props.id) return;
  initModuleWH(props.id);
  pageStore.$state.window[props.id].width = width;
  pageStore.$state.window[props.id].height = height;
};

onMounted(() => {
  if (props.id) setCurrentWindow(props.id);
  windowProps.value.w = props.w;
  windowProps.value.h = props.h;
  if (props.x) windowProps.value.x = props.x < 0 ? 0 : props.x;
  if (props.y) windowProps.value.y = props.y < 0 ? 0 : props.y;
});
</script>

<style lang="scss" scoped>
$hh: 36px;
.drv-draggable {
  border-radius: var(--radius);
  border: 1px solid #99999962;
  box-shadow: 0 0 16px 0 #6464643f;
}

.drag-header {
  border-radius: 0;
  padding-right: 8px;
  border-top-left-radius: var(--radius);
  border-top-right-radius: var(--radius);
  border-bottom: 1px solid #cecdcd;
}

.drag-content {
  height: calc(100% - $hh);
  position: relative;
  background: white;
}

.close {
  &:hover {
    background-color: #f74545;
    color: white;
  }
}

.win-icon {
  font-size: 14px !important;
  width: 40px;
  height: 36px;
}
.window-dark {
  .drag-header {
    background-color: #222;
    color: white;
  }
}
</style>
