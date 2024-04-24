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
    :id="id"
  >
    <slot name="head">
      <a-card :bordered="false" :bodyStyle="{ padding: 0 }" class="drag-header">
        <div class="flex justify-between align-center">
          <div class="flex align-center">
            <div class="win-icon flex flex-s">
              <img :draggable="false" :src="icon" width="20" height="20" v-if="icon" />
            </div>

            <div>{{ title }}</div>
          </div>
          <div class="flex">
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
          </div>
        </div>
      </a-card>
    </slot>
    <div class="drag-content">
      <slot></slot>
    </div>
  </VueDraggable>
</template>

<script setup lang="ts">
import { hiddenWindow, setCurrentWindow, toTop, windowList } from '@/global/config/window';
import usePageStore from '@/store/page';
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
  y: number;
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
  }>(),
  {
    w: 1000,
    h: 700,
    resizable: false,
    y: 0,
    x: 0,
  },
);

const moveTop = () => {
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
  x: window.innerWidth / 2 - props.w / 2 + offset - 32,
  y: window.innerHeight / 2 - props.h / 2 + offset,
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

const minimize = () => {
  windowProps.value = beforeExpandData;
  isFullscreen.value = !isFullscreen.value;
};
const hidden = () => {
  if (props.id) {
    hiddenWindow(props.id);
  }
};
const dragstop = () => {
  if (windowProps.value.y < 0) {
    windowProps.value.y = 0;
  }
  if (windowProps.value.y > maxHeight - 100) {
    windowProps.value.y = maxHeight - 100;
  }
  windowProps.value.x = Math.round(windowProps.value.x!);
  windowProps.value.y = Math.round(windowProps.value.y);
};
/* 用户拖拽结束后记录窗口大小，作为默认值 */
const resizestop = (left: number, top: number, width: number, height: number) => {
  pageStore.$state.window.width = width;
  pageStore.$state.window.height = height;
};
onMounted(() => {
  if (props.id) setCurrentWindow(props.id);
  windowProps.value.w = props.w;
  windowProps.value.h = props.h;
});
</script>

<style lang="scss" scoped>
$hh: 36px;
.drv-draggable {
  border-radius: var(--radius);
  border: 1px solid #99999962;
  box-shadow: 0 0 16px 0 #6464643f;
  &:active {
    .drag-content * {
      pointer-events: none;
    }
  }
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
  background: url('./assets/background.webp');
  background-repeat: no-repeat;
  background-size: 400px 400px;
  background-position: center;
  background-color: #6464643f;
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
</style>
