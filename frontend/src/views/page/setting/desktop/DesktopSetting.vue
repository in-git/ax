<template>
  <PageContainer title="桌面配置">
    <a-card :body-style="{ paddingTop: '0' }">
      <a-tabs>
        <a-tab-pane key="mission" tab="顶部导航">
          <div class="blur-card mb-12">
            <div class="top-bar flex align-center justify-between px-12">
              <a-skeleton-input />
              <a-skeleton-input />
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
  </PageContainer>
</template>

<script setup lang="ts">
import usePageStore from '@/store/page';
import PageContainer from '../components/PageContainer.vue';

const store = usePageStore();
</script>

<style lang="scss" scoped>
.blur-card {
  width: 100%;
  .top-bar {
    height: 62px;
  }
}
</style>
