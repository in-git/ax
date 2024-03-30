<template>
  <div class="missions system-head">
    <div class="window flex flex-s" @click.ca="openMenu">
      <img :src="logo" width="32" alt="" />
    </div>
    <MenuVue></MenuVue>
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
  background: #222136;
  background: linear-gradient(
    90deg,
    rgba(34, 33, 54, 1) 0%,
    rgba(7, 7, 68, 1) 41%,
    rgba(0, 114, 138, 1) 100%
  );
  border-top: 1px solid #ddd;

  z-index: 1000;
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
