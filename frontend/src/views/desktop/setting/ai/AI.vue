<template>
  <a-flex class="qf-container flex-col">
    <a-card :bordered="false">
      <a-tabs v-model:active-key="activeKey">
        <a-tab-pane key="token" tab="获取Token">
          <GetToken />
        </a-tab-pane>
        <a-tab-pane tab="设置" key="settings">
          <QFSettings />
        </a-tab-pane>
      </a-tabs>
    </a-card>
  </a-flex>
</template>

<script setup lang="ts">
import GetToken from './get-token/GetToken.vue';
import QFSettings from './qf-settings/QFSettings.vue';

const activeKey = ref<'token' | 'settings'>('token');
</script>

<style lang="scss" scoped>
.qf-container {
  height: 100%;

  .banner {
    height: 200px;
    width: 100%;
    background: url('../assets/qf-bg.jpg');
    background-position: center;
    background: cover;
    color: white;

    .banner-text {
      height: 100%;
      background-color: #2a2b2e69;
    }
  }
  :deep(.ant-card) {
    box-shadow: none;
    padding-top: 0;
  }
}
</style>
