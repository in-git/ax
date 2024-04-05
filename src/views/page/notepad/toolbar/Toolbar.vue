<template>
  <div class="flex toolbar gc-4">
    <div class="flex align-center">
      <FileVue />
      <Tool />
    </div>

    <GptVue />
  </div>
</template>

<script setup lang="ts">
import FileVue from './file/File.vue';
import GptVue from './gpt/Gpt.vue';
import Tool from './tool/Tool.vue';
</script>

<style lang="scss" scoped>
.toolbar {
  $hh: 24px;
  height: $hh;
  background: #f8f8f8;
  justify-content: space-between;
  align-items: center;
}
</style>
