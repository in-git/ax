<template>
  <Transition
    :appear="appear"
    :leave-active-class="`animate__animated ${leaveActiveClass}`"
    :enter-active-class="`animate__animated ${enterActiveClass}`"
    :duration="duration"
  >
    <slot></slot>
  </Transition>
</template>

<script setup lang="ts">
/**
 * @description: 默认采用 animate style,只要传入后缀即可
 */
withDefaults(
  defineProps<{
    enterActiveClass?: string;
    leaveActiveClass?: string;
    /* 对动态组件是否生效 */
    appear?: boolean;
    duration?: number;
  }>(),
  {
    enterActiveClass: 'animate__fadeIn',
    leaveActiveClass: 'animate__fadeOut',
    appear: true,
    duration: 2000,
  },
);
</script>

<style lang="scss" scoped></style>
