<template>
  <div class="mt-12" v-if="codeFormData?.info">
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
    <a-form-item label="上级菜单">
      <a-tree-select
        v-model:value="codeFormData.info.parentMenuId"
        :field-names="{
          value: 'menuId',
          label: 'menuName',
        }"
        :tree-data="menuData"
      ></a-tree-select>
      <div class="desc">
        <InfoCircleFilled />
        挂载的目录
      </div>
    </a-form-item>
    <a-divider></a-divider>
  </div>
</template>

<script setup lang="ts">
import { menuList } from '@/api/modules/system/menu/menu';
import { convertToTree } from '@/utils/common/tree';
import { codeFormData } from '../../data/form';
const menuData = ref();
const getMenuList = async () => {
  const { data } = await menuList();
  if (data.data) {
    menuData.value = convertToTree(data.data);
  }
};

onMounted(() => {
  getMenuList();
});
</script>

<style lang="scss" scoped>
.desc {
  color: #999;
  font-size: 12px;
}
</style>
