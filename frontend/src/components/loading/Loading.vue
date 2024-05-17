<template>
  <a-flex justify="center" :align="'center'" class="system__loading">
    <a-flex class="text-center gr-8" vertical>
      <div class="text-linear-gradient">AX 管理系统</div>
      <div class="system__subtitle">
        <Loading3QuartersOutlined spin />
        {{ desc }}
      </div>
      <slot></slot>
    </a-flex>
  </a-flex>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    desc?: string;
  }>(),
  {
    desc: '正在加载....',
  },
);
</script>

<style lang="scss" scoped>
.system__loading {
  text-align: center;
  width: 100%;
  height: 100%;
}
</style>
