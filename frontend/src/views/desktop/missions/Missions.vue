<template>
  <div class="missions system__head">
    <div class="window flex flex-s" @click.ca="openMenu">
      <img :src="logo" width="32" alt="" />
    </div>
    <Starter />
    <Tabs />
    <Notice />
  </div>
</template>

<script setup lang="ts">
import logo from '@/assets/logo.png';
import { showStarter } from '../starter/data';
import Starter from '../starter/Starter.vue';
import Notice from './notice/Notice.vue';
import Tabs from './tabs/Tabs.vue';

const openMenu = () => {
  showStarter.value = !showStarter.value;
};
</script>

<style lang="scss" scoped>
.missions {
  height: 42px;
  background: #2221365b;
  backdrop-filter: blur(2px);
  border-top: 1px solid #dddddd79;

  z-index: 10;
  .window {
    width: 42px;
    height: 42px;
    &:hover {
      background: #ffffff5e;
    }
  }
}
</style>
