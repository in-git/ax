<template>
  <a-card>
    <a-row :gutter="16">
      <a-col :span="16">
        <a-form
          :wrapper-col="{ span: 12 }"
          :label-col="{ span: 8 }"
          layout="vertical"
          label-align="left"
        >
          <a-form-item label="temperature">
            <a-slider
              class="w-100"
              v-model:value="aiStore.$state.qianFan.temperature"
              :step="0.1"
              :max="0.9"
              :min="0.1"
            ></a-slider>
          </a-form-item>

          <a-form-item label="top_p">
            <a-slider
              class="w-100"
              v-model:value="aiStore.$state.qianFan.top_p"
              :step="0.1"
              :max="0.9"
              :min="0.1"
            ></a-slider>
          </a-form-item>

          <a-form-item label="penalty_score">
            <a-slider
              class="w-100"
              v-model:value="aiStore.$state.qianFan.penalty_score"
              :step="1"
              :max="2"
              :min="1"
            ></a-slider>
          </a-form-item>

          <a-form-item label="disable_search">
            <div class="text-right">
              <a-switch v-model:checked="aiStore.$state.qianFan.disable_search"></a-switch>
            </div>
          </a-form-item>
        </a-form>
      </a-col>
    </a-row>
  </a-card>
</template>

<script setup lang="ts">
import useAIStore from '@/store/AI/AI';

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
