<template>
  <SystemModal v-model:visible="showMenuForm" title="Menu config">
    <a-form
      :model="menuForm"
      :label-col="{
        span: 8,
      }"
      :wrapper-col="{
        span: 16,
      }"
      label-align="left"
      @finish="submit"
      class="flex-1 flex flex-col"
    >
      <a-card class="flex-1" :body-style="{ height: `500px`, overflowY: 'auto' }">
        <a-row :gutter="16">
          <a-col :span="14">
            <h2 class="mb-12">Base info</h2>
            <a-divider class="mt-12"></a-divider>
            <a-form-item label="Menu name" name="menuName" required>
              <a-input v-model:value="menuForm.menuName"></a-input>
            </a-form-item>

            <a-form-item label="Select parent" name="parentId" required>
              <a-tree-select
                v-model:value="menuForm.parentId"
                :field-names="{
                  value: 'menuId',
                  label: 'menuName',
                }"
                :tree-data="treeData"
              ></a-tree-select>
            </a-form-item>
            <a-form-item label="Menu status" name="status" required>
              <a-radio-group
                v-model:value="menuForm.status"
                :options="statusOptions"
              ></a-radio-group>
            </a-form-item>

            <a-form-item label="Visible" name="visible" required>
              <a-radio-group
                v-model:value="menuForm.visible"
                :options="visibleOptions"
              ></a-radio-group>
            </a-form-item>

            <a-form-item label="Order" name="orderNum" required>
              <a-input-number class="w-100" v-model:value="menuForm.orderNum"></a-input-number>
            </a-form-item>
          </a-col>

          <a-col :span="10">
            <a-tabs v-model:active-key="menuForm.menuType">
              <a-tab-pane
                :key="item.value"
                :tab="item.label"
                v-for="item in menuTypeOptions"
              ></a-tab-pane>
            </a-tabs>
            <!-- 菜单类型（M目录 C菜单 F按钮） -->
            <!-- <a-form-item label="按钮类型" name="menuType" required>
              <a-radio-group v-model:value="menuForm.menuType" buttonStyle="solid">
                <a-radio-button :value="item.value" v-for="item in menuTypeOptions">
                  {{ item.label }}
                </a-radio-button>
              </a-radio-group>
            </a-form-item> -->
            <ParamVue />
          </a-col>
        </a-row>
      </a-card>
      <FormFooter justify="center"></FormFooter>
    </a-form>
  </SystemModal>
</template>

<script setup lang="ts">
import { createMenu, updateMenu } from '@/api/modules/system/menu/menu';
import SystemModal from '@/components/modal/SysModal.vue';
import { statusOptions, visibleOptions } from '@/global/options/system';
import { message } from 'ant-design-vue';
import { loadMenuData } from '../data/curd';
import { listMenu, menuTableConfig } from '../data/data';
import { menuForm, showMenuForm } from '../data/form';
import { menuTypeOptions } from '../data/options';
import ParamVue from './Params.vue';

const treeSelected = ref<number[]>([]);

const treeData = ref<any[]>([]);

const submit = async () => {
  let msg = '';
  /* update */
  if (menuForm.value.menuId) {
    const { data } = await updateMenu(menuForm.value);
    msg = data.msg;
  } else {
    const { data } = await createMenu(menuForm.value);
    msg = data.msg;
  }
  message.success(msg);
  showMenuForm.value = !showMenuForm.value;
  loadMenuData();
};
watch(
  listMenu,
  () => {
    treeSelected.value = [menuForm.value.parentId];
    treeData.value = [
      {
        menuId: 0,
        menuName: '主目录',
        path: '',
      },
      ...menuTableConfig.value.data,
    ];
  },
  {
    deep: true,
    immediate: true,
  },
);
</script>

<style lang="scss" scoped>
@import './style';
</style>
../data/data ./form
