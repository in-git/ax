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
            <a-alert v-else-if="item.type === 'notice'" :message="item.title" type="info">
              <template #description>
                <div v-html="item.content"></div>
              </template>
              <template #action>
                <a-space direction="vertical">
                  <a-button size="small" type="primary" @click="view(item)">查看</a-button>
                </a-space>
              </template>
            </a-alert>
          </template>
        </template>
        <a-empty v-else description="暂时没有收到任何通知" />
      </div>
    </a-drawer>
    <a-modal @ok="viewer = false" v-model:open="viewer" centered :title="currentNotice?.title">
      <div class="content" v-html="currentNotice?.content"></div>
    </a-modal>
  </div>
</template>

<script setup lang="ts">
import useSystemStore from '@/store/system';
import { noticeList, showNotice, type DesktopNotice } from './data';

const viewer = ref(false);

const currentNotice = ref<DesktopNotice>();

const view = (item: DesktopNotice) => {
  viewer.value = true;
  currentNotice.value = item;
  const systemStore = useSystemStore();
  console.log(item.id);

  if (item.id) {
    systemStore.$state.readMessages.push(item.id);
    noticeList.value = noticeList.value.filter(e => {
      return e.id === item.id;
    });
  }
};
</script>

<style lang="scss" scoped>
.content {
  background: #f5f2f3;
  min-height: 100px;
  padding: 12px;
}
</style>
