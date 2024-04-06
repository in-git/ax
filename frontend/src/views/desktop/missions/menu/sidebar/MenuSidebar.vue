<template>
  <div class="menu-sidebar">
    <div class="logo flex flex-s">
      <img :src="logoPng" width="32" height="32" alt="" />
    </div>
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
        <div class="icons flex flex-s" @click="closePage">
          <PoweroffOutlined />
        </div>
      </a-tooltip>
    </div>
  </div>
</template>

<script setup lang="ts">
import logoPng from '@/assets/logo.png';
import {
  FullscreenExitOutlined,
  FullscreenOutlined,
  type PoweroffOutlined,
} from '@ant-design/icons-vue';
import { useFullscreen } from '@vueuse/core';
import { Modal } from 'ant-design-vue';

const { enter, isFullscreen, exit } = useFullscreen();
const closePage = () => {
  Modal.confirm({
    title: 'Waning',
    content: '是否关机',
    centered: true,
    onOk() {
      window.close();
    },
  });
};
</script>

<style lang="scss" scoped>
.menu-sidebar {
  width: 48px;
  background: #0c0c22d0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: 1px solid #444;
  .icons {
    color: white;
    height: 48px;
    font-size: 18px;
    &:hover {
      background: #535353;
    }
  }
  .logo {
    width: 100%;
    height: 48px;
  }
}
</style>
