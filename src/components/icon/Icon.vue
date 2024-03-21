<template>
  <div class="icon" @mousedown.stop="">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    background?: string;
  }>(),
  {
    background: '#eee',
  },
);
</script>

<style lang="scss" scoped>
.icon {
  $wh: 32px;
  width: $wh;
  height: $wh;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer !important;
  border-radius: var(--radius);
  &:hover {
    background: v-bind(background);
  }
}
</style>
