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
        <a-row :gutter="12" class="px-12">
          <a-col :span="14"></a-col>

          <a-col :span="10">
            <a-form-item label="Menu type" name="menuType" required>
              <a-radio-group v-model:value="menuForm.menuType" buttonStyle="solid">
                <a-radio-button value="C">菜单</a-radio-button>
                <a-radio-button value="M">目录</a-radio-button>
                <a-radio-button value="F">按钮</a-radio-button>
              </a-radio-group>
            </a-form-item>
            <ParamVue />
          </a-col>
        </a-row>
      </a-card>
      <FormFooter position="center"></FormFooter>
    </a-form>
  </SystemModal>
</template>

<script setup lang="ts">
import { createMenu, updateMenu } from '@/api/modules/system/menu/menu';
import SystemModal from '@/components/modal/SysModal.vue';
import { message } from 'ant-design-vue';
import type { Key } from 'ant-design-vue/es/vc-tree/interface';
import { loadMenuData, menuConfig } from '../table/data';
import { menuForm, showMenuForm } from './data';
import ParamVue from './Params.vue';

const mode = ref<'home' | 'other'>('home');

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
