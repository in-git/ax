<template>
  <a-flex justify="center" :align="'center'" class="h-100 w-100">
    <div class="system__loading">
      <div class="text-linear-gradient">AX 管理系统</div>
      <div class="system__subtitle">
        <Loading3QuartersOutlined spin />
        正在加载....
      </div>
      <slot></slot>
    </div>
  </a-flex>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.system__loading {
  text-align: center;
}
</style>
