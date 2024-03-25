<template>
  <div class="theme p-4">
    <a-space direction="vertical" class="w-100">
      <a-card>
        <div>设置主题颜色</div>
        <a-divider class="my-18"></a-divider>
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
              <CheckCircleFilled v-if="item === current" />
            </li>
            <a-divider type="vertical" class="h-100" :style="{ color: store.$state.theme }">
              <label class="flex flex-s gc-4">
                自定义
                <input type="color" v-model="store.$state.theme" @change="setTheme" />
              </label>
            </a-divider>
          </ul>
        </div>
      </a-card>

      <a-card>
        <a-flex class="w-100" justify="space-between">
          <div>控件大小</div>
          <a-radio-group v-model:value="store.$state.size">
            <a-radio value="small">小</a-radio>
            <a-radio value="medium">中</a-radio>
            <a-radio value="large">大</a-radio>
          </a-radio-group>
        </a-flex>
      </a-card>

      <a-card>
        <a-flex class="w-100" justify="space-between">
          <div>文字方向</div>
          <div>
            <a-radio-group v-model:value="store.$state.direction">
              <a-radio value="ltr">LTR</a-radio>
              <a-radio value="rtl">RTL</a-radio>
            </a-radio-group>
          </div>
        </a-flex>
      </a-card>

      <a-card>
        <a-flex class="w-100" justify="space-between">
          <div>水波纹特效</div>
          <a-switch
            v-model:checked="store.$state.wave"
            checked-children="开"
            un-checked-children="关"
          ></a-switch>
        </a-flex>
      </a-card>

      <a-card>
        <a-flex class="w-100" justify="space-between">
          <div>虚拟滚动</div>
          <a-switch
            v-model:checked="store.$state.virtual"
            checked-children="开"
            un-checked-children="关"
          ></a-switch>
        </a-flex>
      </a-card>

      <a-card>
        <a-flex class="w-100" justify="space-between">
          <div>移除按钮中的空格</div>
          <a-flex :gap="8" :align="'center'">
            <a-switch
              v-model:checked="store.$state.autoInsertSpaceInButton"
              checked-children="开"
              un-checked-children="关"
            ></a-switch>
            <a-divider type="vertical"></a-divider>
            <a-tooltip title="仅当只有两个字的时候生效">
              <a-button>提交</a-button>
            </a-tooltip>
          </a-flex>
        </a-flex>
      </a-card>
    </a-space>
  </div>
</template>

<script setup lang="ts">
import usePageStore from '@/store/page';
import { CheckCircleFilled } from '@ant-design/icons-vue';
import { useCssVar } from '@vueuse/core';

const colorList = ['#AD2AFD', '#FDB52A', '#09B678', '#3785FA', '#E82626', '#C6C6C6', '#131313'];

const current = ref('#3785FA');

const store = usePageStore();

const selectItem = (item: string) => {
  current.value = item;
  store.$state.theme = item;
  const color = useCssVar('--primary', document.body);
  color.value = item;
};
const setTheme = () => {
  const color = useCssVar('--primary', document.body);
  color.value = store.$state.theme;
  current.value = store.$state.theme;
};
</script>

<style lang="scss" scoped>
.theme {
  background: #f2f2f2;
  height: 100%;
  .color-palette {
    li {
      width: 24px;
      height: 24px;
      border-radius: 4px;
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
  div {
    font-weight: bold;
  }
}
</style>
