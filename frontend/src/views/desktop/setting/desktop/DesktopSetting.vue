<template>
  <PageContainer title="桌面配置">
    <a-card :body-style="{ paddingTop: '0' }">
      <a-tabs>
        <a-tab-pane key="mission" tab="顶部导航">
          <div class="blur-card mb-12">
            <div class="fade-background">
              <div :style="style" class="text-white px-12 w-100 h-100 flex flex-s">AX</div>
            </div>
            <div class="flex align-center gc-12">
              背景模糊
              <a-slider
                v-model:value="store.$state.desktop.topNavigationBar.blur"
                :step="1"
                :max="10"
                :min="0"
                class="flex-1"
              ></a-slider>
              {{ store.$state.desktop.topNavigationBar.blur }}px
            </div>
            <div class="flex align-center gc-12">
              背景透明
              <a-slider
                v-model:value="store.$state.desktop.topNavigationBar.opacity"
                :step="0.1"
                :max="1"
                :min="0"
                class="flex-1"
              ></a-slider>
              {{ store.$state.desktop.topNavigationBar.opacity * 100 }}%
            </div>
          </div>
        </a-tab-pane>
      </a-tabs>
    </a-card>

    <a-card class="mt-12">
      <template #title>
        <div class="text-12 text-999">桌面配置</div>
      </template>
      <a-space class="w-100" direction="vertical">
        <div class="flex justify-between align-center">
          <div>桌面明亮度</div>
          <div class="flex align-center">
            <a-slider
              v-model:value="store.$state.desktop.background.brightness"
              :min="10"
              :max="90"
              style="width: 200px"
            ></a-slider>
            %
          </div>
        </div>

        <div class="flex justify-between align-center">
          <div>桌面模糊</div>
          <div class="flex align-center">
            <a-slider
              v-model:value="store.$state.desktop.background.blur"
              style="width: 200px"
              :max="12"
            ></a-slider>
            px
          </div>
        </div>
      </a-space>
    </a-card>
  </PageContainer>
</template>

<script setup lang="ts">
import usePageStore from '@/store/page';
import type { CSSProperties } from 'vue';
import PageContainer from '../components/PageContainer.vue';

const store = usePageStore();

const style = computed((): CSSProperties => {
  return {
    backdropFilter: `blur(${store.$state.desktop.topNavigationBar.blur}px)`,
    background: `rgba(175, 175, 175, ${store.$state.desktop.topNavigationBar.opacity})`,
  };
});
</script>

<style lang="scss" scoped>
.blur-card {
  width: 100%;
  .fade-background {
    height: 72px;
    border-radius: var(--radius);
    overflow: hidden;
    background: url('../assets/background.webp');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat;
    font-size: 24px;
  }
}
</style>
