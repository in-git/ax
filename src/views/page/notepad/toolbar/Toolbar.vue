<template>
  <div class="flex toolbar">
    <FileVue />
  </div>
</template>

<script setup lang="ts">
import FileVue from './file/File.vue';
</script>

<style lang="scss" scoped>
.toolbar {
  $hh: 24px;
  height: $hh;
  background: #f8f8f8;
}
</style>
