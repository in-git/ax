<template>
  <a-card :bordered="false" :body-style="{ padding: '8px 0' }">
    <a-flex :justify="'space-between'">
      <a-flex :gap="4">
        <a-button @click="clear" ghost>清除</a-button>
      </a-flex>

      <a-flex :gap="8">
        <a-popover trigger="click" placement="bottomRight">
          <a-button ghost>
            <template #icon>
              <SettingOutlined />
            </template>
            设置
          </a-button>
          <template #content>
            <a-card style="width: 300px">
              <a-form :label-col="{ span: 8 }" label-align="left">
                <a-form-item label="裁剪类型">
                  <a-flex :justify="'end'">
                    <a-radio-group v-model:value="cropperProps.stencil" :options="stencilOptions" />
                  </a-flex>
                </a-form-item>
                <a-form-item label="调整大小">
                  <div class="text-right">
                    <a-switch v-model:checked="cropperProps.stencilProps.resizable" />
                  </div>
                </a-form-item>
                <a-form-item label="调整位置">
                  <div class="text-right">
                    <a-switch v-model:checked="cropperProps.stencilProps.movable" />
                  </div>
                </a-form-item>
              </a-form>
            </a-card>
          </template>
        </a-popover>

        <a-popover trigger="click" placement="bottomRight">
          <a-button ghost>
            <div>
              <span>导出</span>
              <down-outlined class="system__subtitle" />
            </div>
          </a-button>
          <template #content>
            <a-card style="width: 300px">
              <a-form :label-col="{ span: 8 }" label-align="left">
                <a-form-item label="导出名">
                  <a-input
                    placeholder="请输入导出的文件名"
                    v-model:value="downloadConfig.exportName"
                  >
                    <template #addonAfter>
                      <reload-outlined @click="downloadConfig.exportName = nanoid(8)" />
                    </template>
                  </a-input>
                </a-form-item>
                <a-form-item label="压缩等级">
                  <a-slider
                    :max="1"
                    :min="0.1"
                    :step="0.1"
                    v-model:value="downloadConfig.compress"
                  />
                </a-form-item>
                <a-form-item label="格式选择">
                  <a-select v-model:value="downloadConfig.format" :options="imageTypeOptions" />
                </a-form-item>
                <a-row>
                  <a-col :offset="8" :span="16">
                    <a-button type="primary" block @click="download">下载</a-button>
                  </a-col>
                </a-row>
              </a-form>
            </a-card>
          </template>
        </a-popover>
      </a-flex>
    </a-flex>
  </a-card>
</template>

<script setup lang="ts">
import { downloadBase64Image } from '@/utils/file/file';
import { SettingOutlined } from '@ant-design/icons-vue';
import { message } from 'ant-design-vue';
import { nanoid } from 'nanoid';
import {
  cropperImage,
  cropperProps,
  cropperRef,
  cropperResult,
  downloadConfig,
} from '../data/data';
import { imageTypeOptions, stencilOptions } from './options';

const clear = () => {
  cropperImage.value = '';
};

onUnmounted(() => {
  clear();
});
const download = () => {
  nextTick(async () => {
    if (cropperResult.value) {
      const { canvas } = cropperRef.value.getResult();
      downloadBase64Image(
        canvas.toDataURL(`image/${downloadConfig.value.format}`, downloadConfig.value.compress),
        downloadConfig.value.exportName,
      );
      message.success('已下载');
    }
  });
};
</script>

<style lang="scss" scoped>
.card {
  box-shadow: none;
  :deep(.ant-card-body) {
    padding: 8px;
  }
}
ul {
  display: grid;
  display: flex;
  flex-wrap: wrap;
  .card-item {
    text-align: center;
  }
}
:deep(.ant-form-item) {
  margin-bottom: 12px;
}
</style>
