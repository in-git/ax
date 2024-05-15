<template>
  <Animation enter-active-class="animate__slideInUp" leave-active-class="animate__slideOutDown">
    <a-card class="notice-popover" title="系统通知" v-if="showNotice">
      <template #extra>
        <a-flex :gap="4">
          <a-tooltip title="刷新系统通知">
            <div class="system__icon" @click="getSystemNotice">
              <ReloadOutlined />
            </div>
          </a-tooltip>
          <div class="system__icon" @click="showNotice = false">
            <CloseOutlined />
          </div>
        </a-flex>
      </template>
      <div class="sticky-top">
        <a-segmented
          v-model:value="currentNoticeType"
          :options="noticeTypeOptions"
          class="mb-8"
        ></a-segmented>
      </div>

      <a-list
        item-layout="horizontal"
        :data-source="list"
        size="small"
        bordered
        :loading="noticeLoading"
      >
        <template #renderItem="{ item }">
          <a-list-item>
            <a-list-item-meta>
              <template #title>
                <a-tag :color="item.color">
                  {{ getLabel(noticeTypeOptions, item.type) }}
                </a-tag>
                {{ item.title }}
              </template>
              <template #description>
                <div class="notice-content" v-html="item.content"></div>
                <div class="system__subtitle">
                  {{ item.time }}
                </div>
              </template>
            </a-list-item-meta>

            <template #actions>
              <div class="system__icon" @click="view(item)">
                <EyeOutlined />
              </div>
            </template>
          </a-list-item>
        </template>
      </a-list>
    </a-card>
  </Animation>
</template>

<script setup lang="ts">
import { openNotepad } from '@/global/window/widget';
import { getTempId } from '@/global/window/window';
import { getLabel } from '@/utils/common/utils';
import {
  currentNoticeType,
  getSystemNotice,
  noticeList,
  noticeLoading,
  showNotice,
} from '../data/data';
import { noticeTypeOptions } from '../data/options';
import type { DesktopNotice } from '../data/type';

const view = (item: DesktopNotice) => {
  openNotepad({
    data: item.content,
    mode: 'markdown',
    id: getTempId(),
  });
};

const list = computed(() => {
  return noticeList.value.filter(e => {
    if (!currentNoticeType.value) {
      return e;
    }
    return e.type === currentNoticeType.value;
  });
});
</script>

<style lang="scss" scoped>
.notice-popover {
  width: 400px;
  height: 500px;
  position: absolute;
  bottom: 40px;
  right: 0;
  z-index: 100;
  border-radius: var(--radius);
  :deep(.ant-card-body) {
    height: calc(100% - 38px);
    overflow-y: auto;
  }
}
.sticky-top {
  position: sticky;
  top: 0;
  z-index: 1;
}
.notice-content {
  display: -webkit-box;
  -webkit-line-clamp: 2; /* 显示的行数 */
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
