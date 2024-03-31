<template>
  <div class="form__footer flex">
    <slot>
      <a-button type="primary" htmlType="submit">Submit</a-button>
    </slot>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    justify?: 'left' | 'right' | 'center';
    position?: 'absolute' | 'sticky';
  }>(),
  {
    justify: 'left',
    position: 'sticky',
  },
);
</script>

<style lang="scss" scoped>
.form__footer {
  position: v-bind(position);
  bottom: 0;
  width: 100%;
  height: 48px;
  background: #f8f8f8;
  border-top: 1px solid #ddd;
  justify-content: v-bind(justify);
  align-items: center;
  padding: 0 12px;
  min-height: 48px;
  z-index: 100;
}
</style>
