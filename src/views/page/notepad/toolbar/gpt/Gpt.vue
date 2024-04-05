<template>
  <div>
    <a-tooltip title="使用AI处理" placement="bottom" :mouseLeaveDelay="0">
      <div class="menu-button flex gc-2" @click="visible = true" accesskey="c">
        <div class="chatgpt">
          <img :src="aiPng" width="14" />
          <span class="ml-4">Ai</span>
        </div>
      </div>
    </a-tooltip>
    <SystemModal w="40%" h="80%" title="Chatgpt" v-model:visible="visible">
      <div class="flex flex-col gy-4 h-100 px-4">
        <div class="count">
          字数:
          <a-tag>{{ inputValue?.length }}</a-tag>
        </div>
        <div class="text-content flex-1 relative">
          {{ inputValue }}
        </div>

        <textarea v-model="textareaValue" placeholder="你想怎么处理这段文本呢？"></textarea>
        <a-button @click="ai" :disabled="textareaValue.length <= 0" type="primary" class="mb-4">
          确定
        </a-button>
      </div>
    </SystemModal>
  </div>
</template>

<script setup lang="ts">
import chatgptPng from '@/assets/apps/gpt.png';
import { getData, openWindow } from '@/global/config/window';
import GptIndex from '../../../gpt/GptIndex.vue';
import aiPng from './asset/ai.png';

const visible = ref(false);
const textareaValue = ref('');
const inputValue = ref('');

import SystemModal from '@/components/modal/SysModal.vue';

const parentData = inject<string>('data')!;

const ai = () => {
  const data = getData(parentData);
  if (data)
    openWindow({
      component: markRaw(GptIndex),
      title: 'ChatGpt',
      icon: chatgptPng,
      data: `${textareaValue.value}\n${inputValue.value}`,
    });
};

watch(visible, () => {
  inputValue.value = getData(parentData);
});
</script>

<style lang="scss" scoped>
@import '../common.scss';
.text-content {
  background: #f5f2f3;
  padding: 8px;
  border-radius: var(--radius);
  color: #999;
  overflow-y: auto;
  text-overflow: ellipsis;
  white-space: pre-wrap;
}
textarea {
  height: 140px;
  resize: none;
  outline: none;
  border: 1px solid #ddd;
  padding: 4px;
  border-radius: var(--radius);
  margin-top: 4px;
}
.chatgpt {
  padding: 0 8px;
  background-image: linear-gradient(to right, #0c02ba, #00ff95);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 16px;
  display: flex;
}
.count {
  color: #898;
  font-size: 12px;
  margin: 4px 0;
}
</style>
