<template>
  <PageContainer title="第三方接口配置">
    <a-space class="mb-12">
      <a-button shape="round" type="primary">PEXELS</a-button>
    </a-space>
    <a-card title="PEXELS">
      <a-form layout="vertical">
        <a-row>
          <a-col :span="8">
            <a-form-item label="访问密钥[API Key]">
              <a-textarea></a-textarea>
              <div>
                没有秘钥?
                <a-button type="link">前往获取</a-button>
              </div>
            </a-form-item>
            <a-form-item>
              <a-button type="primary" block>保存</a-button>
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
    </a-card>
  </PageContainer>
</template>

<script setup lang="ts">
import PageContainer from '@/views/page/setting/components/PageContainer.vue';
</script>

<style lang="scss" scoped>
::v-deep(.ant-card) {
  box-shadow: none;
}
</style>
