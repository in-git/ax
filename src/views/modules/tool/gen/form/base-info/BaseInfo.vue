<template>
  <div>
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
import { codeFormData } from '../../data/form';
</script>

<style lang="scss" scoped></style>
