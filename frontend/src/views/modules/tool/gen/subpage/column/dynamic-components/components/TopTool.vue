<template>
  <div>
    <a-flex justify="space-between" class="step-head" :align="'center'">
      <a-flex :align="'center'">
        <slot name="left"></slot>
        <a-divider type="vertical"></a-divider>
        <a-tag>
          {{ codeFormData.info.tableName }}
        </a-tag>
        {{ currentStep.title }}
      </a-flex>
      <a-flex :align="'center'">
        <a-flex :align="'center'">
          <a-button @click="download" type="text">
            下载
            <template #icon>
              <DownloadOutlined />
            </template>
          </a-button>
          <a-button @click="preview" type="text">
            预览
            <template #icon>
              <EyeOutlined />
            </template>
          </a-button>
        </a-flex>
        <a-divider type="vertical"></a-divider>
        <slot name="right"></slot>
      </a-flex>
    </a-flex>
  </div>
</template>

<script setup lang="ts">
import { batchGenCode, previewCode } from '@/api/modules/tool/gen/gen';
import { getTempId, openWindow } from '@/global/window/window';
import { response } from '@/utils/table/table';
import { currentStep } from '../../data/config';
import { codeFormData } from '../../data/data';
import PreviewVue from '../../pages/Preview.vue';

const getCode: any = inject('code')!;
const download = () => {
  response(batchGenCode, [codeFormData.value.info.tableName]);
};

const preview = async () => {
  const code = getCode();
  const { data } = await previewCode(code);
  openWindow({
    title: '代码预览',
    component: markRaw(PreviewVue),
    data: data.data,
    id: getTempId(),
    dark: true,
  });
};
</script>

<style lang="scss" scoped>
.step-head {
  line-height: 36px;
  border-bottom: 1px solid #ddd;
  padding: 0 12px;
}
:deep(.ant-card) {
  box-shadow: none;
}
</style>
