<template>
  <div v-if="codeFormData?.info" class="mt-12">
    <a-row>
      <a-col :span="8" :offset="4">
        <h3>
          <SettingFilled />
          基础配置
        </h3>
        <div class="desc">
          <info-circle-filled />
          对表的信息进行配置，这些配置不会对业务有实质性的影响
        </div>
      </a-col>
    </a-row>
    <a-form-item name="tableName" required label="表名">
      <a-input v-model:value="codeFormData.info.tableName"></a-input>
    </a-form-item>
    <a-form-item name="tableComment" required label="表描述">
      <a-input v-model:value="codeFormData.info.tableComment"></a-input>
    </a-form-item>
    <a-form-item name="functionAuthor" required label="作者">
      <a-input v-model:value="codeFormData.info.functionAuthor"></a-input>
    </a-form-item>
    <a-form-item name="className" required label="实体类名称">
      <a-input v-model:value="codeFormData.info.className"></a-input>
    </a-form-item>
    <a-form-item name="remark" required label="备注">
      <a-textarea v-model:value="codeFormData.info.remark"></a-textarea>
    </a-form-item>
  </div>
</template>

<script setup lang="ts">
import type { SettingFilled } from '@ant-design/icons-vue';
import { codeFormData } from '../../data/form';
</script>

<style lang="scss" scoped>
h3 {
  font-size: 18px;
}
.desc {
  color: #999;
  margin: 12px 0;
}
</style>
