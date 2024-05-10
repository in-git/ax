<template>
  <div class="qf-container flex flex-col">
    <Transition enter-active-class="animate__animated animate__fadeIn">
      <div class="banner" v-if="activeKey === 'token'">
        <a-flex class="banner-text" :align="'center'" vertical justify="space-around">
          <h3 class="text-36 text-bold text-center">千帆大模型</h3>
          <div class="text-12 text-center my-24 w-40">
            百度自研的旗舰级大规模⼤语⾔模型，覆盖海量中英文语料，具有强大的通用能力，可满足绝大部分对话问答、创作生成、插件应用场景要求
          </div>
        </a-flex>
      </div>
    </Transition>
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
  </div>
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
