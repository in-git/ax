<template>
  <div v-if="codeFormData?.info">
    <a-row>
      <a-col :span="8" :offset="4">
        <h3>
          <DatabaseFilled />
          数据库相关配置
        </h3>
        <div class="my-8 text-12 system-subtitle">
          <info-circle-filled />
          对表的基本信息进行配置
        </div>
      </a-col>
    </a-row>
    <a-form-item label="上级菜单">
      <a-tree-select
        v-model:value="codeFormData.info.parentMenuId"
        :field-names="{
          value: 'menuId',
          label: 'menuName',
        }"
        placeholder="请选择上级菜单"
        :tree-data="menuData"
        allowClear
      ></a-tree-select>

      <div class="text-12 system-subtitle">
        <InfoCircleFilled />
        将会在数据库中创建菜单
      </div>
    </a-form-item>
    <a-form-item name="codeFormData.info.tableName" label="表名">
      <a-input v-model:value="codeFormData.info.tableName"></a-input>
    </a-form-item>

    <a-form-item name="tableComment" label="表描述">
      <a-input v-model:value="codeFormData.info.tableComment"></a-input>
    </a-form-item>
    <a-form-item name="functionAuthor" label="作者">
      <a-input v-model:value="codeFormData.info.functionAuthor"></a-input>
    </a-form-item>
    <a-form-item name="className" label="实体类名称">
      <a-input v-model:value="codeFormData.info.className"></a-input>
    </a-form-item>
    <a-form-item name="remark" label="备注">
      <a-textarea v-model:value="codeFormData.info.remark"></a-textarea>
    </a-form-item>
  </div>
</template>

<script setup lang="ts">
import { getParentMenus } from '@/api/modules/system/menu/utils';
import { codeFormData } from '../../data/form';
const menuData = ref();

onMounted(async () => {
  menuData.value = await getParentMenus();
});
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
