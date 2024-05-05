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
        <ExportVue />
      </a-flex>
    </a-flex>
  </a-card>
</template>

<script setup lang="ts">
import { SettingOutlined } from '@ant-design/icons-vue';
import { cropperImage, cropperProps } from '../data/data';
import ExportVue from './Export.vue';
import { stencilOptions } from './options';

const clear = () => {
  cropperImage.value = '';
};

onUnmounted(() => {
  clear();
});
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
