<template>
  <div class="theme-global">
    <div class="subtitle">全局配置</div>
    <a-card>
      <a-space direction="vertical" class="w-100">
        <a-flex justify="space-between" :align="'center'">
          <div>字体大小</div>
          <div>
            <a-select
              style="width: 120px"
              v-model:value="pageStore.$state.theme.fontSize"
              :options="fontSizeOptions"
            ></a-select>
          </div>
        </a-flex>

        <a-flex justify="space-between" :align="'center'">
          <div>圆角</div>
          <div>
            <a-select
              v-model:value="pageStore.$state.theme.borderRadius"
              style="width: 120px"
              :options="borderRadiusOptions"
            ></a-select>
          </div>
        </a-flex>
      </a-space>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import usePageStore from '@/store/page';
import { borderRadiusOptions, fontSizeOptions } from './options';
const pageStore = usePageStore();
</script>

<style lang="scss" scoped>
.theme-global {
  li {
    height: 80px;
    border: 1px solid #ddd;
    width: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .subtitle {
    margin-bottom: 8px;
  }
}
</style>
