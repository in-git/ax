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
            <a-card v-else-if="item.type === 'notice'" :title="item.title">
              <div v-html="item.content"></div>
              <template #extra>
                <a-button size="small" type="text" @click="view(item)">
                  <RightOutlined />
                </a-button>
              </template>
            </a-card>
          </template>
        </template>
        <a-empty v-else description="暂时没有收到任何通知" />
      </div>
    </a-drawer>
    <!-- 查看通知具体内容 -->
    <a-modal @ok="viewer = false" v-model:open="viewer" centered :title="currentNotice?.title">
      <a-card class="content">
        <div v-html="currentNotice?.content"></div>
      </a-card>
    </a-modal>
  </div>
</template>

<script setup lang="ts">
import useSystemStore from '@/store/system';
import { RightOutlined } from '@ant-design/icons-vue';
import { noticeList, showNotice, type DesktopNotice } from './data';

const viewer = ref(false);

const currentNotice = ref<DesktopNotice>();

const view = (item: DesktopNotice) => {
  viewer.value = true;
  currentNotice.value = item;
  const systemStore = useSystemStore();
  noticeList.value = noticeList.value.filter(e => {
    return e.id !== item.id;
  });
  if (item.id) {
    systemStore.$state.readMessages.push(item.id);
  }
};
</script>

<style lang="scss" scoped>
.content {
  padding: 12px;
  min-height: 240px;
  overflow-y: auto;
}
</style>
