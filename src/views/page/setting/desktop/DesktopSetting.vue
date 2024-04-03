<template>
  <PageContainer title="桌面配置">
    <a-card>
      <a-tabs>
        <a-tab-pane key="top-bar" tab="顶部导航">
          <div class="blur-card mb-12">
            <div class="top-bar flex align-center justify-between px-12">
              <a-skeleton-input />
              <a-skeleton-input />
            </div>
            <div class="flex align-center gc-12">
              背景模糊
              <a-slider :step="0.1" :max="10" :min="0" class="flex-1"></a-slider>
              12px
            </div>
          </div>
        </a-tab-pane>
        <a-tab-pane key="mission" tab="底部任务栏">
          <div class="blur-card mb-12">
            <div class="top-bar flex align-center justify-between px-12">
              <a-skeleton-input />
              <a-skeleton-input />
            </div>
            <div class="flex align-center gc-12">
              背景模糊
              <a-slider :step="0.1" :max="10" :min="0" class="flex-1"></a-slider>
              12px
            </div>
          </div>
        </a-tab-pane>
      </a-tabs>
    </a-card>
  </PageContainer>
</template>

<script setup lang="ts">
import PageContainer from '../../components/PageContainer.vue';
</script>

<style lang="scss" scoped>
.blur-card {
  width: 100%;
  .top-bar {
    height: 62px;
  }
}
</style>
