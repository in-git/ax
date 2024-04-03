<template>
  <PageContainer title="外观设置" class="theme">
    <a-space direction="vertical" class="w-100">
      <a-card>
        <div class="color-palette">
          <ul class="flex gc-4">
            <li
              class="flex flex-s align-center"
              v-for="(item, key) in colorList"
              :key="key"
              :style="{ background: item }"
              @click="selectItem(item)"
              :class="{ active: item === current }"
            >
              <CheckOutlined class="text-12" v-if="item === current" />
            </li>
            <a-divider type="vertical" class="h-100" :style="{ color: store.$state.theme.theme }">
              <label class="flex flex-s gc-4">
                自定义
                <input type="color" v-model="store.$state.theme.theme" @change="setTheme" />
              </label>
            </a-divider>
          </ul>
        </div>
      </a-card>

      <ThemeControl />
      <ThemeGlobal />
    </a-space>
  </PageContainer>
</template>

<script setup lang="ts">
import usePageStore from '@/store/page';
import { useCssVar } from '@vueuse/core';
import PageContainer from '../../components/PageContainer.vue';
import ThemeControl from './controls/ThemeControl.vue';
import ThemeGlobal from './global/ThemeGlobal.vue';
const colorList = ['#AD2AFD', '#FDB52A', '#09B678', '#3785FA', '#E82626', '#C6C6C6', '#131313'];
const current = ref('#3785FA');

const store = usePageStore();

const selectItem = (item: string) => {
  current.value = item;
  store.$state.theme.theme = item;
  const color = useCssVar('--primary', document.body);
  color.value = item;
};
const setTheme = () => {
  const color = useCssVar('--primary', document.body);
  color.value = store.$state.theme.theme;
  current.value = store.$state.theme.theme;
};
</script>

<style lang="scss" scoped>
.theme {
  background: #f1f0f5;
  overflow-y: auto;
  height: 100%;
  padding-bottom: 12px;
  .color-palette {
    li {
      width: 24px;
      height: 24px;
      border-radius: 12px;
      border: 2px solid #c2c2c2;
      cursor: pointer;
      color: white;
    }
    li.active {
      $active-color: #e9e9e9;
      border-color: #cecece;
      color: $active-color;
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
</style>
