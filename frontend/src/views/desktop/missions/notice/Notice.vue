<template>
  <div class="notice flex gc-4">
    <div class="system-icon" @click="showNotice = true">
      <BellOutlined />
    </div>
  </div>
</template>

<script setup lang="ts">
import { BellOutlined } from '@ant-design/icons-vue';
import { showNotice } from '../../apps/notice/data';
</script>

<style lang="scss" scoped>
.system-icon {
  width: 40px;
  color: white;
  height: 40px;
  border-radius: var(--radius);
  &:hover {
    background: #727281c5;
    color: white !important;
  }
}
</style>
