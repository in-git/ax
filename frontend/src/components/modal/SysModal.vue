<template>
  <Transition
    enter-active-class="animate__animated animate__zoomIn"
    leave-active-class="animate__animated animate__zoomOut"
  >
    <div
      class="system__modal"
      v-show="visible"
      :class="[boolValue(showMask, 'model__mask', 'model__mask__none')]"
    >
      <div class="modal__container" :style="style">
        <a-card :body-style="{ padding: '8px' }" class="model__head">
          <a-flex justify="space-between" :align="'center'">
            <slot name="title">{{ title }}</slot>
            <div>
              <slot name="extra"></slot>
              <div class="close-icon" @click="close">
                <CloseOutlined class="text-12" />
              </div>
            </div>
          </a-flex>
        </a-card>

        <div class="modal__content">
          <slot></slot>
        </div>
        <div>
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { boolValue } from '@/utils/common/utils';
import type { CSSProperties } from 'vue';

const emit = defineEmits(['update:visible']);

const props = withDefaults(
  defineProps<{
    visible: boolean;
    title: string;
    w?: string;
    h?: string;
    showMask?: boolean;
    position?: 'absolute' | 'fixed';
    toBody?: boolean;
  }>(),
  {
    w: '90%',
    h: '90%',
    showMask: true,
    position: 'absolute',
    toBody: false,
  },
);

const close = () => {
  emit('update:visible', false);
};
const style = computed((): CSSProperties => {
  return {
    width: props.w,
    height: props.h,
  };
});
</script>

<style lang="scss" scoped>
.model__mask__none {
  pointer-events: none;
  background: none;
  * {
    pointer-events: initial !important;
  }
}
.model__head {
  border-radius: 0 !important;
}
:deep(.ant-card) {
}
.model__mask {
  background-color: #3333336b;
  pointer-events: initial;
}
.system__modal {
  position: v-bind(position);
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  .close-icon {
    cursor: pointer;
    width: 24px;
    height: 24px;
    &:hover {
      color: var(--primary);
    }
  }
  .modal__container {
    border-radius: var(--radius);
    display: flex;
    flex-direction: column;
    border: 1px solid #ddd;
  }
  .modal__content {
    flex: 1;
    overflow-y: auto;
  }
}
</style>
