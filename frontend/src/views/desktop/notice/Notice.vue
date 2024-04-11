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
          <template v-for="(item, key) in noticeList" :key="key">
            <a-alert
              :message="item.title"
              :description="item.content"
              v-if="item.type === 'error'"
              type="error"
              closable
            />
            <a-alert
              v-else-if="item.type === 'notice'"
              :message="item.title"
              type="info"
              closable
              @close="onClose(item.id)"
            >
              <template #description>
                <div v-html="item.content"></div>
              </template>
              <template #action>
                <a-space direction="vertical">
                  <a-button size="small" type="primary">查看</a-button>
                </a-space>
              </template>
            </a-alert>
          </template>
        </template>
        <a-empty v-else description="暂时没有收到任何通知" />
      </div>
    </a-drawer>
  </div>
</template>

<script setup lang="ts">
import useSystemStore from '@/store/system';
import { noticeList, showNotice } from './data';

const onClose = (id?: number) => {
  const systemStore = useSystemStore();
  if (id) {
    systemStore.$state.readMessages.push(id);
    noticeList.value = noticeList.value.filter(e => {
      return e.id === id;
    });
  }
};
</script>

<style lang="scss" scoped></style>
