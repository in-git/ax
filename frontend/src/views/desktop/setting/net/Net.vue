<template>
  <PageContainer title="网络设置">
    <BaseURL />
    <a-card class="mt-8 h-100 ax_plain_card" :body-style="{ height: '100%' }" :bordered="false">
      <template #title>
        <div class="system__subtitle">其他配置</div>
      </template>
      <a-flex justify="space-between" class="mb-8">
        <div>超时</div>
        <div>
          <a-auto-complete
            style="width: 200px"
            v-model:value="devStore.$state.developer.timeout"
            :options="timeoutOptions"
          ></a-auto-complete>
          <div class="text-12 system__subtitle mt-8">
            <InfoCircleFilled />
            当请求超时则放弃请求
          </div>
        </div>
      </a-flex>
      <a-flex justify="space-between">
        <div>Token</div>
        <div>
          <a-textarea
            :auto-size="{ maxRows: 3 }"
            style="width: 200px"
            :value="userStore.$state.token"
          ></a-textarea>
        </div>
      </a-flex>
    </a-card>
  </PageContainer>
</template>

<script setup lang="ts">
import useSystemStore from '@/store/system';
import useUserStore from '@/store/user';
import PageContainer from '@/views/desktop/setting/components/PageContainer.vue';
import type { InfoCircleFilled } from '@ant-design/icons-vue';
import BaseURL from './base-url/BaseURL.vue';
import { timeoutOptions } from './data';

const userStore = useUserStore();
const devStore = useSystemStore();
</script>

<style lang="scss" scoped>
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
