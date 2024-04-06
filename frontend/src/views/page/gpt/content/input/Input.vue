<template>
  <div class="content-input flex flex-col h-100">
    <Toolbar />
    <div class="textarea flex-1 h-100 relative">
      <textarea
        :disabled="dataLoading"
        @keydown.enter="sendText"
        v-model="msg"
        placeholder="按下[alt/ctrl]+enter 换行, 按 enter 发送消息"
        v-focus
        ref="textareaRef"
      ></textarea>
      <LoadingVue v-if="dataLoading" />
    </div>
    <div class="my-4 text-right mr-12">
      <a-button
        type="primary"
        :disabled="msg.length === 0"
        @click="sendText"
        :loading="dataLoading"
      >
        发送
      </a-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import LoadingVue from './Loading.vue';
import { dataLoading, msg, send } from './data';
import Toolbar from './toolbar/Toolbar.vue';

const textareaRef = ref<HTMLElement>();

const sendText = () => {
  nextTick(() => {
    send(textareaRef);
  });
};
</script>

<style lang="scss" scoped>
textarea {
  border: none;
  outline: none;
  width: 100%;
  height: 100%;
  resize: none;
  padding: 0 12px;
  margin: 0;
  background: transparent;
}
textarea:disabled {
  color: #999;
}
</style>
