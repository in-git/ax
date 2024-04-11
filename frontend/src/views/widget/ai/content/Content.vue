<template>
  <div class="gpt-content flex-1 flex flex-col relative">
    <HeadVue />
    <Splitpanes class="default-theme" horizontal @resized="resize">
      <pane :size="100 - AIStore.$state.qianFan.splitSize">
        <MessageVue />
      </pane>
      <pane :size="AIStore.$state.qianFan.splitSize" max-size="90" min-size="10">
        <InputVue />
      </pane>
    </Splitpanes>
  </div>
</template>

<script setup lang="ts">
import useAIStore from '@/store/AI/AI';
import { Pane, Splitpanes } from 'splitpanes';
import 'splitpanes/dist/splitpanes.css';
import HeadVue from './head/Head.vue';
import InputVue from './input/Input.vue';
import MessageVue from './message/Message.vue';

const AIStore = useAIStore();

const resize = (data: any[]) => {
  AIStore.$state.qianFan.splitSize = data[1].size;
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
