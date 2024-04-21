<template>
  <PageContainer title="桌面配置">
    <a-card class="card__container" :bordered="false">
      <template #title>
        <div class="text-12 system__subtitle">顶部导航</div>
      </template>
      <a-form class="blur-card mb-12">
        <div class="fade-background">
          <div :style="style" class="text-white px-12 w-100 h-100 flex flex-s">AX</div>
        </div>
        <a-flex :align="'center'" :gap="12" justify="space-between">
          <div>背景模糊</div>
          <a-flex>
            <a-slider
              v-model:value="store.$state.desktop.topNavigationBar.blur"
              :step="1"
              :max="10"
              :min="0"
              style="width: 200px"
            ></a-slider>
            <div class="label">{{ store.$state.desktop.topNavigationBar.blur }}px</div>
          </a-flex>
        </a-flex>
        <a-flex :align="'center'" :gap="12" justify="space-between">
          背景透明
          <a-flex>
            <a-slider
              v-model:value="store.$state.desktop.topNavigationBar.opacity"
              :step="0.1"
              :max="1"
              :min="0"
              style="width: 200px"
            ></a-slider>
            <div class="label">{{ store.$state.desktop.topNavigationBar.opacity * 100 }}%</div>
          </a-flex>
        </a-flex>

        <a-flex :align="'center'" :gap="12" justify="space-between">
          边框透明度
          <a-flex>
            <a-slider
              v-model:value="store.$state.desktop.topNavigationBar.borderOpacity"
              :step="0.1"
              :max="1"
              :min="0"
              style="width: 200px"
            ></a-slider>
            <div class="label">
              {{ store.$state.desktop.topNavigationBar.borderOpacity * 100 }}%
            </div>
          </a-flex>
        </a-flex>
      </a-form>
    </a-card>

    <a-card class="card__container" :bordered="false">
      <template #title>
        <div class="text-12 system__subtitle">桌面配置</div>
      </template>
      <a-space class="w-100" direction="vertical">
        <div class="flex justify-between align-center">
          <div>明亮度</div>
          <div class="flex align-center">
            <a-slider
              v-model:value="store.$state.desktop.background.brightness"
              :min="0"
              :max="80"
              :step="5"
              style="width: 200px"
            ></a-slider>
            <div class="label">{{ store.$state.desktop.background.brightness }}%</div>
          </div>
        </div>

        <div class="flex justify-between align-center">
          <div>模糊</div>
          <div class="flex align-center">
            <a-slider
              v-model:value="store.$state.desktop.background.blur"
              style="width: 200px"
              :max="12"
            ></a-slider>
            <div class="label">{{ store.$state.desktop.background.blur }}px</div>
          </div>
        </div>

        <div class="flex justify-between align-center">
          <div>灰度</div>
          <div class="flex align-center">
            <a-slider
              v-model:value="store.$state.desktop.background.grayscale"
              style="width: 200px"
              :max="100"
              :step="5"
            ></a-slider>
            <div class="label">{{ store.$state.desktop.background.grayscale }}%</div>
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
    // filter: grayscale()
  }
}
.label {
  width: 36px;
  text-align: center;
  color: #999;
}
</style>
