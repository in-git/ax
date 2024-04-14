<template>
  <div class="flex toolbar gc-4">
    <div class="flex align-center">
      <FileVue />
      <Tool />
    </div>

    <AiVue />
  </div>
</template>

<script setup lang="ts">
import AiVue from './ai/Ai.vue';
import FileVue from './file/File.vue';
import Tool from './tool/Tool.vue';
</script>

<style lang="scss" scoped>
.toolbar {
  background: #f8f8f8;
  justify-content: space-between;
  align-items: center;
}
</style>
