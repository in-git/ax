<template>
  <div class="notice">
    <a-drawer
      title="通知"
      placement="right"
      :open="showNotice"
      :get-container="false"
      :style="{ position: 'absolute' }"
      @close="showNotice = false"
    >
      <div class="flex flex-col gr-12">
        <a-alert
          :message="item.title"
          :description="item.content"
          :type="item.type"
          closable
          v-for="(item, key) in noticeList"
          :key="key"
        />
      </div>
    </a-drawer>
  </div>
</template>

<script setup lang="ts">
import { noticeList, showNotice } from './data';
</script>

<style lang="scss" scoped></style>
