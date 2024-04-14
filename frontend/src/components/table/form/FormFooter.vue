<template>
  <a-card class="form__footer flex">
    <slot>
      <a-button type="primary" :loading="loading" htmlType="submit">保存</a-button>
    </slot>
  </a-card>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    justify?: 'left' | 'right' | 'center';
    position?: 'absolute' | 'sticky';
    loading?: boolean;
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
  width: 100%;
  height: 48px;
  border-top: 1px solid #ddd;
  justify-content: v-bind(justify);
  align-items: center;
  z-index: 100;
}
</style>
