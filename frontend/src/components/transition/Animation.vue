<template>
  <Transition appear v-bind="props">
    <slot></slot>
  </Transition>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    enterActiveClass: string;
    leaveActiveClass: string;
  }>(),
  {
    enterActiveClass: 'animate__animated animate__fadeIn',
    leaveActiveClass: 'animate__animated animate__fadeOut',
  },
);
</script>

<style lang="scss" scoped></style>
