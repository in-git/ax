<template>
  <div class="theme">
    <a-page-header title="设置主题颜色" class="px-8 py-8" />
    <a-space direction="vertical" class="w-100 px-8">
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

      <div class="px-12">内置属性</div>
      <a-card>
        <a-space class="w-100" direction="vertical" :size="16">
          <a-flex class="w-100" justify="space-between">
            <div class="flex align-center">
              <div>文字方向</div>
              <div class="desc">反转文字显示</div>
            </div>
            <div>
              <a-radio-group v-model:value="store.$state.theme.direction">
                <a-radio value="ltr">LTR</a-radio>
                <a-radio value="rtl">RTL</a-radio>
              </a-radio-group>
            </div>
          </a-flex>
          <a-flex class="w-100" justify="space-between">
            <div>控件大小</div>
            <a-radio-group v-model:value="store.$state.theme.size">
              <a-radio-button value="small">小</a-radio-button>
              <a-radio-button value="medium">中</a-radio-button>
              <a-radio-button value="large">大</a-radio-button>
            </a-radio-group>
          </a-flex>
          <a-flex class="w-100" justify="space-between">
            <div class="flex">
              水波纹特效
              <div class="desc">按钮上的水波纹特效</div>
            </div>
            <div class="text-right">
              <a-switch
                v-model:checked="store.$state.theme.wave"
                checked-children="开"
                un-checked-children="关"
              ></a-switch>
            </div>
          </a-flex>

          <a-flex class="w-100" justify="space-between">
            虚拟滚动
            <a-switch
              v-model:checked="store.$state.theme.virtual"
              checked-children="开"
              un-checked-children="关"
            ></a-switch>
          </a-flex>
          <a-flex class="w-100" justify="space-between">
            <div>移除按钮中的空格</div>
            <a-flex :gap="8" :align="'center'">
              <a-switch
                v-model:checked="store.$state.theme.autoInsertSpaceInButton"
                checked-children="开"
                un-checked-children="关"
              ></a-switch>
              <a-divider type="vertical"></a-divider>
              <a-tooltip title="仅当只有两个字的时候生效">
                <a-button>提交</a-button>
              </a-tooltip>
            </a-flex>
          </a-flex>
        </a-space>
      </a-card>
    </a-space>
  </div>
</template>

<script setup lang="ts">
import usePageStore from '@/store/page';
import { useCssVar } from '@vueuse/core';

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
  height: 100%;
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
