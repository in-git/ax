<template>
  <div>
    <a-row :gutter="16">
      <a-col :span="16">
        <a-form :label-col="{ span: 8 }" :wrapper-col="{ span: 15, offset: 1 }" label-align="left">
          <a-form-item label="temperature" @mouseenter="hover('temperature')">
            <a-slider
              class="w-100"
              v-model:value="aiStore.$state.qianFan.temperature"
              :step="0.1"
              :max="0.9"
              :min="0.1"
            ></a-slider>
          </a-form-item>

          <a-form-item label="top_p" @mouseenter="hover('top_p')">
            <a-slider
              class="w-100"
              v-model:value="aiStore.$state.qianFan.top_p"
              :step="0.1"
              :max="0.9"
              :min="0.1"
            ></a-slider>
          </a-form-item>

          <a-form-item label="penalty_score" @mouseenter="hover('penalty_score')">
            <a-slider
              class="w-100"
              v-model:value="aiStore.$state.qianFan.penalty_score"
              :step="1"
              :max="2"
              :min="1"
            ></a-slider>
          </a-form-item>

          <a-form-item label="disable_search" @mouseenter="hover('disable_search')">
            <div class="text-right">
              <a-switch v-model:checked="aiStore.$state.qianFan.disable_search"></a-switch>
            </div>
          </a-form-item>
        </a-form>
      </a-col>
      <a-col :span="8">
        <a-card
          :title="`提示[${currentTips.param}]`"
          class="tips"
          :bordered="false"
          :bodyStyle="{ paddingTop: '0' }"
        >
          {{ currentTips.text }}
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
import useAIStore from '@/store/AI/AI';

import { tips } from './tips';
const currentTips = ref({
  text: '鼠标移动到对应的参数会有提示',
  param: '空',
});
const hover = (keyword: string) => {
  currentTips.value.param = keyword;
  currentTips.value.text = tips[keyword];
};
const aiStore = useAIStore();
</script>

<style lang="scss" scoped>
.tips {
  min-height: 400px;
  background-color: #f0f2f5;
  border-radius: var(--radius);
  white-space: pre-wrap;
}
</style>
