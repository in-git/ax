<template>
  <div class="notice flex gc-4">
    <div class="system-icon">
      <BellOutlined />
    </div>
  </div>
</template>

<script setup lang="ts">
import { BellOutlined } from '@ant-design/icons-vue';
</script>

<style lang="scss" scoped>
.system-icon {
  width: 48px;
  color: white;
  height: 48px;
  border-radius: 0;
}
</style>
