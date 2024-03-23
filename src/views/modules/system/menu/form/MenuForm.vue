<template>
  <div class="menu-form">
    <div class="page-header">
      <a-page-header title="Go back" sub-title="Edit form" @back="back" />
    </div>
    <div class="p-12">
      <a-form
        :model="menuForm"
        :label-col="{
          span: 8,
        }"
        :wrapper-col="{
          span: 16,
        }"
        label-align="left"
      >
        <a-card>
          <a-row :gutter="12">
            <a-col :span="14">
              <a-form-item label="Menu name" name="menuName" required>
                <a-input v-model:value="menuForm.menuName"></a-input>
              </a-form-item>

              <a-form-item label="Order" name="orderNum" required>
                <a-input-number class="w-100" v-model:value="menuForm.orderNum"></a-input-number>
              </a-form-item>

              <a-form-item label="Menu type" name="menuName" required>
                <a-radio-group v-model:value="menuForm.menuType" buttonStyle="solid">
                  <a-radio-button value="C">Control</a-radio-button>
                  <a-radio-button value="M">Menu</a-radio-button>
                  <a-radio-button value="F">Category</a-radio-button>
                </a-radio-group>
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

              <ParamVue />
            </a-col>

            <a-col :span="10">
              <a-form-item label="Parent" name="parentId" required>
                <div>
                  <a-switch
                    v-model:checked="menuForm.parentId"
                    :un-checked-value="'0'"
                    :checked-value="''"
                    checked-children="Root"
                    size="default"
                    un-checked-children="Select"
                  ></a-switch>
                </div>
              </a-form-item>
              <a-card :body-style="{ maxHeight: '450px', overflow: 'auto' }" title="Select parent">
                <a-tree
                  :field-names="{
                    title: 'menuName',
                    key: 'menuId',
                  }"
                  @select="select"
                  :tree-data="treeData"
                ></a-tree>
              </a-card>
            </a-col>
          </a-row>
        </a-card>
        <div class="footer">
          <a-button danger>Clear</a-button>
          <a-button type="primary">Submit</a-button>
        </div>
      </a-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { statusOptions, visibleOptions } from '@/global/options/system';
import type { Key } from 'ant-design-vue/es/vc-tree/interface';
import { menuConfig } from '../table/data';
import { editMenu, menuForm } from './data';
import ParamVue from './Params.vue';

const treeData: any = menuConfig.value.data;
const back = () => {
  editMenu.value = !editMenu.value;
};
const select = (checked: Key[]) => {
  console.log(checked);
  menuForm.value.parentId = `${checked[0] || '1'}`;
};
</script>

<style lang="scss" scoped>
.menu-form {
  height: 100%;
  overflow-y: auto;
  .page-header {
    position: sticky;
    top: 0;
    z-index: 10;
    background-color: white;
  }
}
.footer {
  position: sticky;
  bottom: 0;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  margin-top: 24px;
  gap: 12px;
  padding: 0 12px;
}
::v-deep(.ant-card) {
  box-shadow: none !important;
}
</style>
