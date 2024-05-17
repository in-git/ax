<template>
  <div class="notice">
    <div class="system__icon" @click="open">
      <a-badge :dot="noticeList.length > 0">
        <BellOutlined class="icon" />
      </a-badge>
    </div>
    <Teleport to="body">
      <Popover />
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { BellOutlined } from '@ant-design/icons-vue';
import { getSystemNotice, noticeList, showNotice } from './data/data';
import Popover from './subpage/Popover.vue';

const open = () => {
  showNotice.value = true;
  getSystemNotice();
};
</script>

<style lang="scss" scoped>
.notice {
  position: relative;
}
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
