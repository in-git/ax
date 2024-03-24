<template>
  <div class="missions system-head">
    <div class="window flex flex-s">
      <img :src="logo" width="32" alt="" />
    </div>
    <Tabs />
    <Notice />
  </div>
</template>

<script setup lang="ts">
import logo from '@/assets/logo.png';
import Notice from './notice/Notice.vue';
import Tabs from './tabs/Tabs.vue';
</script>

<style lang="scss" scoped>
.missions {
  height: 42px;
  background: #222222;
  border-top: 1px solid #ddd;
  position: sticky;
  bottom: 0;
  .window {
    width: 42px;
    height: 42px;
    &:hover {
      background: white;
      filter: grayscale(0%);
    }
  }
}
</style>
