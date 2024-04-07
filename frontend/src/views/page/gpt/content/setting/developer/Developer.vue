<template>
  <div class="development">
    <a-card>
      <a-form layout="vertical" :wrapper-col="{ span: 8, offset: 10 }" :label-col="{ span: 6 }">
        <a-form-item label="后端接口">
          <a-auto-complete
            :options="urlOptions"
            v-model:value="gptStore.$state.config.baseUrl"
          ></a-auto-complete>
          <div class="text-999">
            <InfoCircleFilled />
            非开发人员，请勿修改
          </div>
        </a-form-item>
      </a-form>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import { InfoCircleFilled } from '@ant-design/icons-vue';
import useGptStore from '../../../store/gpt';
import { urlOptions } from './data';

const gptStore = useGptStore();
</script>

<style lang="scss" scoped></style>
