<template>
  <PageContainer title="网络设置">
    <BaseURL />
    <a-card class="mt-12">
      <a-flex justify="space-between">
        <div>超时</div>
        <div>
          <a-auto-complete
            style="width: 200px"
            v-model:value="devStore.$state.developer.timeout"
            :options="timeoutOptions"
          ></a-auto-complete>
          <div class="text-12 text-999 mt-8">
            <InfoCircleFilled />
            当请求超时则放弃请求
          </div>
        </div>
      </a-flex>
      <a-button type="primary" @click="test">测试</a-button>
    </a-card>
  </PageContainer>
</template>

<script setup lang="ts">
import { testNode } from '@/api/node/test';
import usePageStore from '@/store/page';
import PageContainer from '@/views/page/components/PageContainer.vue';
import type { InfoCircleFilled } from '@ant-design/icons-vue';
import BaseURL from './base-url/BaseURL.vue';
import { timeoutOptions } from './data';

const devStore = usePageStore();

const test = async () => {
  const data = await testNode();
  console.log(data);
};
</script>

<style lang="scss" scoped>
.system-net {
  background: #f1f0f5;
  height: 100%;
}
.timeout-list {
  display: flex;
  gap: 12px;
  li {
    $wh: 64px;
    width: $wh;
    height: $wh;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: var(--radius);
    cursor: pointer;
    &:nth-child(1) {
      background: #d8e2dc;
    }
    &:nth-child(2) {
      background: #ffcad4;
    }
    &:nth-child(3) {
      background: #9d8189;
    }
  }
}
</style>
