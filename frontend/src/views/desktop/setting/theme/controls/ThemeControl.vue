<template>
  <div>
    <a-card>
      <template #title>
        <div class="system-subtitle">控件属性</div>
      </template>
      <a-space class="w-100" direction="vertical" :size="24">
        <a-flex class="w-100" justify="space-between">
          <div class="flex align-center">
            <div>紧凑模式</div>
          </div>
          <div>
            <a-select
              v-model:value="store.$state.theme.algorithm"
              :options="themeOptions"
            ></a-select>
          </div>
        </a-flex>

        <a-flex class="w-100" justify="space-between">
          <div class="flex align-center">
            <div>文字方向</div>
          </div>
          <div>
            <a-switch
              un-checked-value="ltr"
              checked-value="rtl"
              v-model:checked="store.$state.theme.direction"
            ></a-switch>
          </div>
        </a-flex>

        <a-flex class="w-100" justify="space-between">
          <div class="flex">水波纹特效</div>
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
          </a-flex>
        </a-flex>
        <a-flex class="w-100" justify="space-between">
          <div>控件大小</div>
          <a-radio-group v-model:value="store.$state.theme.size">
            <a-radio-button value="small">小</a-radio-button>
            <a-radio-button value="medium">中</a-radio-button>
            <a-radio-button value="large">大</a-radio-button>
          </a-radio-group>
        </a-flex>
      </a-space>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import usePageStore from '@/store/page';
const store = usePageStore();

const themeOptions = [
  {
    label: '黑暗模式',
    value: 'dark',
  },
  {
    label: '紧凑模式',
    value: 'compact',
  },
  {
    label: '默认模式',
    value: 'default',
  },
];
</script>

<style lang="scss" scoped></style>
