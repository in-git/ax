<template>
  <div class="flex toolbar gc-4">
    <FileVue />
    <GptVue />
    <Tool />
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
}
</style>
