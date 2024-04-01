<template>
  <div class="flex toolbar gc-4">
    <FileVue />
    <GptVue />
  </div>
</template>

<script setup lang="ts">
import FileVue from './file/File.vue';
import GptVue from './gpt/Gpt.vue';
</script>

<style lang="scss" scoped>
.toolbar {
  $hh: 24px;
  height: $hh;
  background: #f8f8f8;
}
</style>
