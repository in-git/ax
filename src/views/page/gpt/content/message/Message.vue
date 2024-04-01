<template>
  <div class="gpt-message flex-1 px-12" ref="msgRef">
    <ul class="msg-list flex gr-8 flex-col">
      <li v-for="(item, key) in conversation.messageList" :key="key">
        <div class="message-item flex gc-4" :class="[item.role]">
          <div class="avatar flex flex-s">
            <img :src="isSystem(item.role) ? logoPng : userPng" class="w-100 h-100" />
          </div>
          <div class="msg-item" :class="[expand ? 'expand-text' : '']">
            <div class="flex gc-4 align-center msg-head" style="width: fit-content">
              <div class="text-999">
                {{ item.role }}
              </div>
              <div class="actions flex gc-2 text-999">
                <template v-for="(v, k) in messageActions" :key="k">
                  <a-tooltip :title="v.tips">
                    <div
                      class="system-icon"
                      v-show="v.show && v.show(item)"
                      @click="v.action(item, key)"
                    >
                      <component :is="v.icon"></component>
                    </div>
                  </a-tooltip>
                </template>
              </div>
            </div>
            <div class="msg">
              <div v-if="!isSystem(item.role) || !item.content.includes('```')">
                {{ item.content.trim() }}
              </div>
              <MdPreview previewTheme="default" v-else :modelValue="item.content" />
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import logoPng from '@/assets/logo.png';
import userPng from '@/assets/system/user.png';
import { MdPreview } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import { conversation } from '../../sidebar/sidebar';
import { messageActions } from './data';

const expand = ref(false);
const msgRef = ref<HTMLElement | null>();
const isSystem = (role: string) => {
  return role === 'assistant';
};
watch(
  conversation,
  () => {
    nextTick(() => {
      if (msgRef.value) {
        msgRef.value.scrollTo({
          top: msgRef.value.scrollHeight,
          behavior: 'smooth',
        });
      }
    });
  },
  {
    deep: true,
    immediate: true,
  },
);
</script>

<style lang="scss" scoped>
@import './style';
</style>
