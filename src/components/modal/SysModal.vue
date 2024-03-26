<template>
  <Transition
    enter-active-class="animate__animated animate__zoomIn"
    leave-active-class="animate__animated animate__zoomOut"
  >
    <div class="system__modal" v-show="visible">
      <div class="modal__container" :style="style">
        <div class="system-head px-8">
          <slot name="title">{{ title }}</slot>
          <div>
            <slot name="extra"></slot>
            <div class="system-icon" @click="close">
              <CloseOutlined class="text-12" />
            </div>
          </div>
        </div>

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
import type { CSSProperties } from 'vue';

const emit = defineEmits(['update:visible']);

const props = defineProps<{
  visible: boolean;
  title: string;
  w: string;
  h: string;
}>();
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
.system__modal {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #3333336b;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;

  .modal__container {
    border-radius: var(--radius);
    background-color: white;
    display: flex;
    flex-direction: column;
  }
  .modal__content {
    flex: 1;
    overflow-y: auto;
  }
}
</style>
