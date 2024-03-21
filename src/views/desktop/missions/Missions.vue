<template>
  <div class="missions system-head">
    <div class="window flex flex-s">
      <img :src="windowsPng" width="22" alt="" />
    </div>
    <Tabs />
    <Notice />
  </div>
</template>

<script setup lang="ts">
import windowsPng from './assets/windows.png';
import Notice from './notice/Notice.vue';
import Tabs from './tabs/Tabs.vue';
</script>

<style lang="scss" scoped>
.missions {
  height: 48px;
  background: #f8f8f8;
  border-top: 1px solid #ddd;
  .window {
    width: 48px;
    height: 48px;
    filter: grayscale(100%);
    &:hover {
      background: white;
      filter: grayscale(0%);
    }
  }
}
</style>
