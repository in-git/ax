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
    position?: 'left' | 'right' | 'center';
  }>(),
  {
    position: 'left',
  },
);
</script>

<style lang="scss" scoped>
.form__footer {
  position: sticky;
  bottom: 0;
  width: 100%;
  height: 48px;
  background: #f8f8f8;
  border-top: 1px solid #ddd;
  justify-content: v-bind(position);
  align-items: center;
  padding: 0 12px;
  min-height: 48px;
  z-index: 100;
}
</style>
