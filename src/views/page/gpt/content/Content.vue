<template>
  <div class="gpt-content flex-1 flex flex-col relative">
    <HeadVue />
    <Splitpanes class="default-theme" horizontal @resized="resize">
      <pane :size="100 - gptStore.$state.config.splitSize">
        <MessageVue />
      </pane>
      <pane :size="gptStore.$state.config.splitSize" max-size="90" min-size="10">
        <InputVue />
      </pane>
    </Splitpanes>
  </div>
</template>

<script setup lang="ts">
import useGptStore from '@/views/page/gpt/store/gpt';
import { Pane, Splitpanes } from 'splitpanes';
import 'splitpanes/dist/splitpanes.css';
import HeadVue from './head/Head.vue';
import InputVue from './input/Input.vue';
import MessageVue from './message/Message.vue';

const gptStore = useGptStore();

const resize = (data: any[]) => {
  gptStore.$state.config.splitSize = data[1].size;
};
</script>

<style lang="scss" scoped>
::v-deep(.splitpanes) {
  height: calc(100% - 32px);
  .splitpanes__splitter {
    height: 4px !important;
    background: #ddd !important;
    &::before {
      display: none !important;
    }
    &::after {
      display: none !important;
    }
  }
  .splitpanes__pane {
    background: #f2f2f2 !important;
  }
}
</style>
@/views/page/gpt/gpt/gpt
