<template>
  <div>
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
              <a-input placeholder="请输入导出的文件名" v-model:value="downloadConfig.exportName">
                <template #addonAfter>
                  <reload-outlined @click="downloadConfig.exportName = nanoid(8)" />
                </template>
              </a-input>
            </a-form-item>
            <a-form-item label="压缩等级">
              <a-slider :max="1" :min="0.1" :step="0.1" v-model:value="downloadConfig.compress" />
            </a-form-item>
            <a-form-item label="格式选择">
              <a-select v-model:value="downloadConfig.format" :options="imageTypeOptions" />
            </a-form-item>
            <a-form-item label="导出">
              <a-flex :gap="8" wrap="wrap">
                <a-button @click="download" type="primary">
                  下载
                  <template #icon>
                    <DownloadOutlined />
                  </template>
                </a-button>

                <a-button @click="getBas64">
                  Base64
                  <template #icon>
                    <ExportOutlined />
                  </template>
                </a-button>
              </a-flex>
            </a-form-item>
          </a-form>
        </a-card>
      </template>
    </a-popover>
  </div>
</template>

<script setup lang="ts">
import { openNotepad } from '@/global/window/widget';
import { downloadBase64Image } from '@/utils/file/file';
import { ExportOutlined } from '@ant-design/icons-vue';
import { message } from 'ant-design-vue';
import { nanoid } from 'nanoid';
import { cropperRef, cropperResult, downloadConfig } from '../data/data';
import { imageTypeOptions } from './options';

const download = () => {
  nextTick(async () => {
    if (cropperResult.value) {
      const { canvas } = cropperRef.value.getResult();
      if (!canvas) return;
      downloadBase64Image(
        canvas.toDataURL(`image/${downloadConfig.value.format}`, downloadConfig.value.compress),
        downloadConfig.value.exportName,
      );
      message.success('已下载');
    }
  });
};

const getBas64 = () => {
  nextTick(async () => {
    if (cropperResult.value) {
      const { canvas } = cropperResult.value;
      if (!canvas) return;
      const base64 = canvas.toDataURL(
        `image/${downloadConfig.value.format}`,
        downloadConfig.value.compress,
      );
      openNotepad(base64);
    }
  });
};
</script>

<style lang="scss" scoped></style>
@/global/windows/widget
