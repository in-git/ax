<template>
  <PageContainer title="第三方接口配置">
    <a-space class="mb-12">
      <a-button shape="round" type="primary">PEXELS</a-button>
    </a-space>
    <a-card title="PEXELS">
      <a-form layout="vertical">
        <a-row :gutter="12">
          <a-col :span="12">
            <div class="text-center mb-24 PEXELS-logo">
              <img height="60" src="https://images.pexels.com/lib/api/pexels.png" alt="" />
            </div>
            <a-form-item label="访问密钥[API Key]" name="key" required>
              <a-textarea v-model:value="key"></a-textarea>
              <div>
                没有秘钥?
                <a-button type="link">前往获取</a-button>
              </div>
            </a-form-item>
            <a-form-item name="save">
              <a-button @click="save" :disabled="key.length === 0" type="primary" block>
                保存
              </a-button>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <div class="desc w-100 h-100 p-12">
              <h3>PEXELS</h3>
              <a-divider></a-divider>
              免费的股票照片和视频，你可以在任何地方使用。浏览数以百万计的高品质免版税的股票图像和版权免费的图片。
            </div>
          </a-col>
        </a-row>
      </a-form>
    </a-card>
  </PageContainer>
</template>

<script setup lang="ts">
import PageContainer from '@/views/desktop/setting/components/PageContainer.vue';
import { message } from 'ant-design-vue';
import localforage from 'localforage';

const key = ref('7qj4RgUvYwc2qD7KqXEENiRCozdjpuZHndOEHtkyZ6AAq0VNb1GHe7BE');

const save = () => {
  localforage.setItem('db-api-pexels', key.value);
  message.success('成功保存');
};
</script>

<style lang="scss" scoped>
::v-deep(.ant-card) {
  box-shadow: none;
}
.PEXELS-logo {
  padding: 12px 0;
  border-radius: var(--radius);
}
.desc {
  border-radius: var(--radius);
  background: #f5f2f3;
}
</style>
