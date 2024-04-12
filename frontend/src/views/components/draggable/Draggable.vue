<template>
  <VueDraggable
    v-model:w="width"
    v-model:h="height"
    :z="z"
    v-model:x="x"
    v-model:y="y"
    drag-handle=".drag-header"
    @dragstop="dragstop"
    @mousedown="moveTop"
    handles-type="borders"
    :minWidth="600"
    :minHeight="600"
    enableNativeDrag
  >
    <slot name="head">
      <div class="drag-header flex justify-between align-center">
        <div class="flex align-center">
          <div class="win-icon flex flex-s">
            <img :src="icon" width="20" height="20" v-if="icon" />
          </div>

          <div>{{ title }}</div>
        </div>
        <div class="flex">
          <div class="system-icon minus" @click="hidden">
            <MinusOutlined />
          </div>
          <div class="system-icon close" @click="close">
            <CloseOutlined />
          </div>
        </div>
      </div>
    </slot>
    <div class="drag-content">
      <slot></slot>
    </div>
  </VueDraggable>
</template>

<script setup lang="ts">
import { hiddenWindow, setCurrentWindow, toTop, windowList } from '@/global/config/window';
import { MinusOutlined } from '@ant-design/icons-vue';
import VueDraggable from 'draggable-resizable-vue3';

const emit = defineEmits(['close']);

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
const x = ref(window.innerWidth / 2 - props.w / 2 + offset - 32);
const y = ref(window.innerHeight / 2 - props.h / 2 + offset);
const maxHeight = window.innerHeight;

const width = ref();
const height = ref();

const hidden = () => {
  if (props.id) {
    hiddenWindow(props.id);
  }
};
const dragstop = () => {
  if (y.value < 0) {
    y.value = 0;
  }
  if (y.value > maxHeight - 100) {
    y.value = maxHeight - 100;
  }
};

onMounted(() => {
  if (props.id) setCurrentWindow(props.id);
  width.value = props.w;
  height.value = props.h;
});
</script>

<style lang="scss" scoped>
$hh: 42px;
.drv {
  border: none;
  box-shadow:
    0 6px 16px 0 #00000014,
    0 3px 6px -4px #0000001f,
    0 9px 28px 8px #0000000d;
}
.drv-draggable {
  border-radius: var(--radius) !important;
}
.drag-header {
  cursor: move;
  background: white;
  height: 40px;
  border-bottom: 1px solid #ddd;
  border-top-left-radius: var(--radius);
  border-top-right-radius: var(--radius);
}
.drag-content {
  height: calc(100% - 40px);
  position: relative;
}

%icon {
  width: 40px;
  height: 40px;
  border-radius: 0;
  color: #909399;
  &:hover {
    background: #dddddd70;
  }
}
.close {
  @extend %icon;
  &:hover {
    background-color: #f74545;
    color: white;
  }
}
.minus {
  @extend %icon;
  &:hover {
    background-color: #dddddd70;
  }
}
.win-icon {
  width: 40px;
  height: 38px;
}
</style>
