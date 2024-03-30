<template>
  <div class="menu-sidebar">
    <div>
      <a-tooltip title="关闭网页" placement="right">
        <div class="icons flex flex-s">
          <PoweroffOutlined />
        </div>
      </a-tooltip>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PoweroffOutlined } from '@ant-design/icons-vue';
</script>

<style lang="scss" scoped>
.menu-sidebar {
  width: 48px;
  background: #1f1f1fec;
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
  border-right: 1px solid;
  .icons {
    color: white;
    height: 48px;
    font-size: 18px;
    &:hover {
      background: #535353;
    }
  }
}
</style>
