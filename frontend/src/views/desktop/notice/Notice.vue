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
        <template v-if="noticeList.length > 0">
          <a-alert
            :message="item.title"
            :description="item.content"
            :type="item.type"
            closable
            v-for="(item, key) in noticeList"
            :key="key"
          />
        </template>
        <a-empty v-else description="暂时没有收到任何通知" />
      </div>
    </a-drawer>
  </div>
</template>

<script setup lang="ts">
import { noticeList, showNotice } from './data';
</script>

<style lang="scss" scoped></style>
