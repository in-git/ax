<template>
  <PageContainer title="外观设置" class="theme">
    <a-space direction="vertical" class="w-100" :size="18">
      <div>
        <a-card>
          <template #title>
            <div class="system__subtitle">主题颜色</div>
          </template>
          <div class="color-palette">
            <ul class="flex gc-4 align-center">
              <li
                class="flex flex-s align-center"
                v-for="(item, key) in colorList"
                :key="key"
                :style="{ background: item }"
                @click="selectItem(item)"
                :class="{ active: item === store.$state.theme.theme }"
              >
                <CheckOutlined class="text-12" v-if="item === store.$state.theme.theme" />
              </li>
              <a-divider type="vertical"></a-divider>
              <a-popover title="自定颜色" trigger="click">
                <div class="system__icon system__subtitle">
                  <BgColorsOutlined />
                  <span class="text-12 mx-8">自定义</span>
                  <div class="custom-color" :style="{ background: store.$state.theme.theme }"></div>
                </div>
                <template #content>
                  <Vue3ColorPicker
                    mode="solid"
                    :showColorList="false"
                    :showEyeDrop="false"
                    @update:model-value="setColor"
                  />
                </template>
              </a-popover>
            </ul>
          </div>
        </a-card>
      </div>
      <ThemeControl />
      <ThemeGlobal />
    </a-space>
  </PageContainer>
</template>

<script setup lang="ts">
import usePageStore from '@/store/page';
import { BgColorsOutlined } from '@ant-design/icons-vue';
import { Vue3ColorPicker } from '@cyhnkckali/vue3-color-picker';
import '@cyhnkckali/vue3-color-picker/dist/style.css';
import { useCssVar } from '@vueuse/core';
import PageContainer from '../components/PageContainer.vue';
import ThemeControl from './controls/ThemeControl.vue';
import ThemeGlobal from './global/ThemeGlobal.vue';
const colorList = ['#1677ff', '#6954F0', '#FDB52A', '#09B678', '#E82626', '#C6C6C6'];

const store = usePageStore();
const setColor = (data: string) => {
  store.$state.theme.theme = data;
};

const selectItem = (item: string) => {
  store.$state.theme.theme = '';
  store.$state.theme.theme = item;
  const color = useCssVar('--primary', document.body);
  color.value = item;
};
</script>

<style lang="scss" scoped>
.theme {
  overflow-y: auto;
  height: 100%;
  .color-palette {
    li {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      border: 2px solid #c2c2c2;
      cursor: pointer;
      color: white;
    }
    li.active {
      $active-color: #e9e9e9;
      border-color: var(--primary);
      color: white;
    }
    input[type='color'] {
      width: 24px;
      height: 24px;
      border: none;
      outline: none;
      margin: 0;
      padding: 0;
      cursor: pointer;
    }
  }
  .desc {
    color: #999;
    font-size: 12px;
    margin-left: 16px;
  }
}
.custom-color {
  width: 24px;
  height: 24px;
  border: 2px solid #c2c2c2;
  border-radius: var(--radius);
}
</style>
