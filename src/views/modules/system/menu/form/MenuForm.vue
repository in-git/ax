<template>
  <div class="menu-form">
    <div class="page-header">
      <a-page-header title="Go back" sub-title="Edit form" @back="back" />
    </div>
    <div>
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
      >
        <a-card>
          <a-row :gutter="12" class="px-12">
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
              <a-form-item label="Parent" name="parentId">
                <div>
                  <a-switch
                    v-model:checked="mode"
                    checked-children="Root"
                    size="default"
                    un-checked-children="Select"
                  ></a-switch>
                </div>
              </a-form-item>
              <a-card :body-style="{ maxHeight: '450px', overflow: 'auto' }" title="Select parent">
                <a-tree
                  v-if="!mode"
                  :field-names="{
                    title: 'menuName',
                    key: 'menuId',
                  }"
                  v-model:selected-keys="treeSelected"
                  @select="select"
                  :tree-data="treeData"
                ></a-tree>
                <div v-else class="flex flex-s root flex-col">
                  <div class="text-24"><HomeOutlined /></div>
                  <div>Root</div>
                </div>
              </a-card>
            </a-col>
          </a-row>
        </a-card>
        <div class="footer">
          <a-button danger @click="resetFields">Clear</a-button>
          <a-button type="primary" htmlType="submit">Submit</a-button>
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

import { createMenu, updateMenu } from '@/api/modules/system/menu/menu';
import { HomeOutlined } from '@ant-design/icons-vue';
import { Form, message } from 'ant-design-vue';

const mode = ref(false);
const useForm = Form.useForm;
const { resetFields } = useForm(menuForm);
const treeData: any = menuConfig.value.data;
const treeSelected = ref<string[]>([]);

const back = () => {
  editMenu.value = !editMenu.value;
};

const select = (checked: Key[]) => {
  menuForm.value.parentId = `${checked[0] || '1'}`;
};

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
  editMenu.value = !editMenu.value;
};
watch(
  menuForm,
  () => {
    treeSelected.value = [menuForm.value.parentId];
    mode.value = menuForm.value.parentId === '0';
  },
  {
    deep: true,
  },
);
</script>

<style lang="scss" scoped>
@import './style';
</style>
