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
            <InfoCircleFilled />
            相当于一个账号,
            <a-button type="link" href="https://faucet.openkey.cloud/" target="_blank">
              推荐获取
            </a-button>
          </div>
        </a-form-item>
        <a-divider class="my-8" />
        <a-form-item label="查询余额">
          <div>
            <a-card :loading="loading">
              <template #title>余额</template>
              <template #extra>
                <a-button
                  type="primary"
                  :disabled="!gptStore.$state.config.token"
                  @click="subscription"
                  :loading="loading"
                  block
                >
                  查询
                </a-button>
              </template>
              <a-progress :percent="totalAmount / balance">
                <template #format="percent">
                  <span>{{ percent.toFixed(2) }}%</span>
                </template>
              </a-progress>
              <div class="flex gc-12">
                <div class="mb-4">
                  <span class="text-999 mr-4">总余额:</span>
                  <span>{{ Number(balance).toFixed(2) }}</span>
                </div>
                <div>
                  <span class="text-999 mr-4">已使用:</span>
                  <span>{{ (Number(totalAmount) / 100).toFixed(2) }}</span>
                </div>
              </div>
            </a-card>
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
import useGptStore from '@/views/page/gpt/store/gpt';
import { InfoCircleFilled } from '@ant-design/icons-vue';
import { getBalance } from '../../input/data';

const gptStore = useGptStore();
const loading = ref(false);
const balance = ref<number>(0);
const totalAmount = ref<number>(0);

/* 订阅查询 */
const subscription = async () => {
  loading.value = true;
  const { total, balanceData } = await getBalance();
  loading.value = false;
  totalAmount.value = total;
  balance.value = balanceData;
};
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
@/views/page/gpt/gpt/gpt
