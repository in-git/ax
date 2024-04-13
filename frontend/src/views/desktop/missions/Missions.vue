<template>
  <div class="missions system__head">
    <div class="window flex flex-s" @click.ca="openMenu">
      <img :src="logo" width="32" alt="" />
    </div>
    <MenuVue />
    <Tabs />
    <Notice />
  </div>
</template>

<script setup lang="ts">
import logo from '@/assets/logo.png';
import { showWindowMenu } from './menu/data';
import MenuVue from './menu/Menu.vue';
import Notice from './notice/Notice.vue';
import Tabs from './tabs/Tabs.vue';

const openMenu = () => {
  showWindowMenu.value = !showWindowMenu.value;
};
</script>

<style lang="scss" scoped>
.missions {
  height: 42px;
  background: #2221365b;
  backdrop-filter: blur(2px);
  border-top: 1px solid #dddddd79;

  z-index: 100;
  .window {
    width: 42px;
    height: 42px;
    &:hover {
      background: #ffffff5e;
      filter: grayscale(0%);
    }
  }
}
</style>
