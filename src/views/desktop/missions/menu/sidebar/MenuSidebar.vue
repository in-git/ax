<template>
  <div class="menu-sidebar">
    <div class="flex flex-col">
      <template v-if="!isFullscreen">
        <a-tooltip title="全屏" placement="right" @click="enter">
          <div class="icons flex flex-s">
            <FullscreenOutlined />
          </div>
        </a-tooltip>
      </template>
      <template v-else>
        <a-tooltip title="退出全屏" placement="right" @click="exit">
          <div class="icons flex flex-s">
            <FullscreenExitOutlined />
          </div>
        </a-tooltip>
      </template>
      <a-tooltip title="关闭网页" placement="right">
        <div class="icons flex flex-s">
          <PoweroffOutlined />
        </div>
      </a-tooltip>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  FullscreenExitOutlined,
  FullscreenOutlined,
  type PoweroffOutlined,
} from '@ant-design/icons-vue';
import { useFullscreen } from '@vueuse/core';

const { enter, isFullscreen, exit } = useFullscreen();
const fullscreen = () => {
  enter();
};
</script>

<style lang="scss" scoped>
.menu-sidebar {
  width: 48px;
  background: #0c0c22;
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
