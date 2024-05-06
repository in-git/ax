<template>
  <div class="welcome relative">
    <a-space class="w-100" :size="18" direction="vertical">
      <h1 class="text-white title">AX 后台管理系统</h1>
      <div class="mb-12">
        <div class="desc">Windows操作风格的管理系统</div>
        <div class="desc">一键生成增删改查代码,可二次开发</div>
        <div class="text-center">
          <a target="_blank" href="https://gitee.com/in-git/ax">
            <img :src="getFavicon(`https://gitee.com/in-git/ax`)" width="32" />
          </a>
          <a target="_blank" class="ml-12" @click="tips">
            <img :src="getFavicon('https://space.bilibili.com/301733306')" width="32" />
          </a>
        </div>
      </div>

      <ButtonVue @onClick="introModal = true"></ButtonVue>

      <Banner />
      <GridVue />
    </a-space>

    <a-modal centered title="常见问题" v-model:open="introModal" get-container=".welcome">
      <Intro />
    </a-modal>
  </div>
</template>

<script setup lang="ts">
import { getFavicon } from '@/api/utils/image';
import { message } from 'ant-design-vue';
import Banner from './welcome/Banner.vue';
import ButtonVue from './welcome/Button.vue';
import GridVue from './welcome/Grid.vue';
import Intro from './welcome/Intro.vue';
const introModal = ref(false);

const tips = () => {
  message.info('教程正在建设中');
};
</script>

<style lang="scss" scoped>
.welcome {
  flex-basis: 70%;
  background: #f8f8f8;
  border-right: 1px solid #ddd;
  padding: 36px;
  position: relative;
  height: 100vh;
  overflow-y: auto;
  width: 70%;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  background-position: center !important;
  background-attachment: fixed;
  background: url('../assets/background.webp');
  .title {
    background-image: var(--linear-gradient);
    -webkit-background-clip: text;
    color: transparent;
    font-size: 48px;
    text-align: center;
  }
  .desc {
    margin: 12px 0;
    color: #ddd;
    font-size: 20px;
    line-height: 28px;
    vertical-align: middle;
    text-align: center;
  }
}
</style>
