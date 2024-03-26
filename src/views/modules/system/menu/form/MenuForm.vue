<template>
  <div class="system-form-modal">
    <div class="menu-form modal-container flex flex-col">
      <div class="system-form-head px-12">
        <div>Menu info</div>
        <div class="system-icon" @click="showMenuForm = false">
          <CloseOutlined />
        </div>
      </div>
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
          <a-row :gutter="12" class="px-12">
            <a-col :span="14">
              <a-form-item label="Menu name" name="menuName" required>
                <a-input v-model:value="menuForm.menuName"></a-input>
              </a-form-item>

              <a-form-item label="Order" name="orderNum" required>
                <a-input-number class="w-100" v-model:value="menuForm.orderNum"></a-input-number>
              </a-form-item>

              <a-form-item label="Menu type" name="menuType" required>
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
                <div class="flex justify-right">
                  <a-segmented v-model:value="mode" :options="modeOptions"></a-segmented>
                </div>
              </a-form-item>
              <a-card :body-style="{ maxHeight: '450px', overflow: 'auto' }" title="Select parent">
                <div>
                  <a-tree
                    v-if="mode === 'other'"
                    :field-names="{
                      title: 'menuName',
                      key: 'menuId',
                    }"
                    v-model:selected-keys="treeSelected"
                    @select="select"
                    selectable
                    :tree-data="treeData"
                    block-node
                  ></a-tree>
                  <div v-else class="flex flex-s root flex-col">
                    <div class="text-24">
                      <img :src="homePage" width="48" alt="" />
                    </div>
                    <div>Root</div>
                  </div>
                </div>
              </a-card>
            </a-col>
          </a-row>
        </a-card>
        <FormFooter position="center"></FormFooter>
      </a-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { statusOptions, visibleOptions } from '@/global/options/system';
import type { Key } from 'ant-design-vue/es/vc-tree/interface';
import { loadMenuData, menuConfig } from '../table/data';
import { menuForm, showMenuForm } from './data';
import homePage from './homepage.png';
import ParamVue from './Params.vue';

import { createMenu, updateMenu } from '@/api/modules/system/menu/menu';
import { message } from 'ant-design-vue';

const mode = ref<'home' | 'other'>('home');

const modeOptions = [
  {
    label: 'Home',
    value: 'home',
  },
  {
    label: 'Others',
    value: 'other',
  },
];
const treeData: any = menuConfig.value.data;
const treeSelected = ref<number[]>([]);

const select = (checked: Key[]) => {
  console.log(checked[0]);

  menuForm.value.parentId = Number(checked[0]);
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
  showMenuForm.value = !showMenuForm.value;
  loadMenuData();
};
watch(
  menuForm,
  () => {
    treeSelected.value = [menuForm.value.parentId];
    mode.value = menuForm.value.parentId === 0 ? 'home' : 'other';
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
