<template>
  <div class="notice">
    <a-drawer
      title="Notice"
      placement="right"
      :open="showNotice"
      :get-container="false"
      :style="{ position: 'absolute' }"
      @close="showNotice = false"
    >
      <a-empty></a-empty>
    </a-drawer>
  </div>
</template>

<script setup lang="ts">
import { showNotice } from './data';
</script>

<style lang="scss" scoped></style>
