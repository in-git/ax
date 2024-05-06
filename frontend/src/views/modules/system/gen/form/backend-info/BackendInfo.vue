<template>
  <div v-if="codeFormData?.info">
    <a-row>
      <a-col :span="8" :offset="4">
        <h3>
          <CodeOutlined />
          后端相关配置
        </h3>
        <div class="desc mb-12">
          <info-circle-filled />
          将会影响代码的目录结构
        </div>
      </a-col>
    </a-row>

    <a-form-item label="生成包路径">
      <a-input v-model:value="codeFormData.info.packageName"></a-input>
      <div class="desc">
        <InfoCircleFilled />
        Java 包的路径
      </div>
    </a-form-item>

    <a-form-item label="模块名">
      <a-input v-model:value="codeFormData.info.moduleName"></a-input>
      <div class="desc">
        <InfoCircleFilled />
        系统生成3层目录,模块名为第一层
      </div>
    </a-form-item>
    <a-form-item label="业务名">
      <a-input v-model:value="codeFormData.info.businessName"></a-input>
      <div class="desc">
        <InfoCircleFilled />
        业务名为第二层目录
      </div>
    </a-form-item>
    <a-form-item label="功能名">
      <a-input v-model:value="codeFormData.info.functionName"></a-input>
      <!-- <div class="desc">
        <InfoCircleFilled />
        功能名为第三层目录
      </div> -->
    </a-form-item>
  </div>
</template>

<script setup lang="ts">
import { codeFormData } from '../../data/form';
</script>

<style lang="scss" scoped>
.desc {
  color: #999;
  font-size: 12px;
}
</style>
