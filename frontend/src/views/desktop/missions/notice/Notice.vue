<template>
  <div class="notice flex gc-4">
    <div class="system__icon" @click="showNotice = true">
      <a-badge :dot="noticeList.length > 0">
        <BellOutlined class="icon" />
      </a-badge>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BellOutlined } from '@ant-design/icons-vue';
import { noticeList, showNotice } from '../../notice/data';
</script>

<style lang="scss" scoped>
.system__icon {
  width: 40px;
  color: white;
  height: 40px;
  border-radius: var(--radius);
  .icon {
    color: white !important;
    font-size: 18px;
  }
  &:hover {
    background: #727281c5;
  }
}
</style>
