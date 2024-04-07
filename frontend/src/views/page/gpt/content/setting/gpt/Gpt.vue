<template>
  <div>
    <a-form
      :model="gptStore.$state.config"
      :wrapper-col="{ span: 10 }"
      :label-col="{ span: 14 }"
      layout="vertical"
      labelAlign="left"
    >
      <a-card title="GPT设置">
        <a-form-item>
          <template #label>
            <span class="text-primary">秘钥[令牌][Key][Token]</span>
          </template>
          <a-textarea
            :autoSize="{ row: 4 }"
            v-model:value="gptStore.$state.config.token"
            allow-clear
            :maxlength="60"
            :show-count="true"
          ></a-textarea>
          <div class="text-999">
            没有账号?
            <a-button type="link" href="https://faucet.openkey.cloud/" target="_blank">
              推荐获取
            </a-button>
          </div>
          <div>
            已有账号?
            <a-popover trigger="click" placement="right" v-model:open="popVisible">
              <a-button type="link">备忘录</a-button>
              <template #content>
                <Memo
                  @update:value="popVisible = false"
                  v-model:value="gptStore.$state.config.token"
                />
              </template>
            </a-popover>
          </div>
        </a-form-item>
        <a-divider class="my-8" />

        <a-form-item label="随机性[temperature]">
          <a-slider
            :min="0"
            :step="0.1"
            :max="1"
            v-model:value="gptStore.$state.config.temperature"
            class="my-4"
          ></a-slider>
          <div class="text-999">
            <InfoCircleFilled />
            值越大，随机性越高
          </div>
        </a-form-item>

        <a-divider class="my-8" />
        <a-form-item label="核采样[top_p]">
          <a-slider
            :min="0"
            :step="0.1"
            :max="1"
            v-model:value="gptStore.$state.config.top_p"
            class="my-4"
          ></a-slider>
          <div class="text-999">
            <InfoCircleFilled />
            与随机性类似
          </div>
        </a-form-item>
      </a-card>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import Memo from '@/views/components/memo/Memo.vue';
import useGptStore from '@/views/page/gpt/store/gpt';
import { InfoCircleFilled } from '@ant-design/icons-vue';

const gptStore = useGptStore();

const popVisible = ref(false);
</script>

<style lang="scss" scoped>
.ant-form-item {
  margin-bottom: 0;
}
.text-orange {
  color: orange;
  zoom: 0.9;
}
.text-primary {
  color: var(--primary);
}
</style>
