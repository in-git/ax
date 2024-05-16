<template>
  <a-modal
    :footer="false"
    v-model:open="menuShowForm"
    title="菜单配置"
    get-container=".SystemMenu"
    width="70%"
  >
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
      <a-card class="flex-1" title="基础配置">
        <template #extra>
          <a-button type="primary" :loading="loading" htmlType="submit">保存</a-button>
        </template>
        <a-row :gutter="16">
          <a-col :span="12">
            <a-form-item label="菜单名称" name="menuName" required>
              <a-input v-model:value="menuForm.menuName"></a-input>
            </a-form-item>

            <a-form-item label="选择图标" name="icon">
              <a-input allow-clear v-model:value="menuForm.icon">
                <template #addonAfter>
                  <a-popover trigger="click" placement="bottom" v-model:open="visible">
                    <span class="cursor-pointer">
                      <SmileOutlined />
                    </span>
                    <template #content>
                      <div>
                        <Gallery
                          type="image-icon"
                          @update="visible = false"
                          v-model="menuForm.icon"
                        />
                      </div>
                    </template>
                  </a-popover>
                </template>
              </a-input>
            </a-form-item>

            <a-form-item label="父级菜单" name="parentId" required>
              <a-tree-select
                v-model:value="menuForm.parentId"
                :field-names="{
                  value: 'menuId',
                  label: 'menuName',
                }"
                :tree-data="treeData"
              ></a-tree-select>
            </a-form-item>
            <a-form-item label="菜单状态" name="status" required>
              <a-radio-group
                v-model:value="menuForm.status"
                :options="statusOptions"
              ></a-radio-group>
            </a-form-item>

            <a-form-item label="是否显示" name="visible" required>
              <a-radio-group
                v-model:value="menuForm.visible"
                :options="visibleOptions"
              ></a-radio-group>
            </a-form-item>

            <a-form-item label="菜单排序" name="orderNum" required>
              <a-input-number class="w-100" v-model:value="menuForm.orderNum"></a-input-number>
            </a-form-item>
          </a-col>

          <a-col :span="12">
            <a-radio-group
              v-model:value="menuForm.menuType"
              :options="menuTypeOptions"
              option-type="button"
            ></a-radio-group>
            <a-card class="mt-8">
              <ParamVue />
            </a-card>
          </a-col>
        </a-row>
      </a-card>
    </a-form>
  </a-modal>
</template>

<script setup lang="ts">
import { createMenu, updateMenu } from '@/api/modules/system/menu/menu';
import { statusOptions, visibleOptions } from '@/global/options/system';
import Gallery from '@/views/selector/gallery/Gallery.vue';
import type { SmileOutlined } from '@ant-design/icons-vue';
import { message } from 'ant-design-vue';
import { menuList } from '../../data/curd';
import { listMenu, menuTableConfig } from '../../data/data';
import { menuForm, menuShowForm } from '../../data/form';
import { menuTypeOptions } from '../../data/options';
import ParamVue from './form/Params.vue';

const treeSelected = ref<number[]>([]);
const loading = ref(false);
const visible = ref(false);
const treeData = ref<any[]>([]);

const submit = async () => {
  let msg = '';
  loading.value = true;
  /* update */
  if (menuForm.value.menuId) {
    const { data } = await updateMenu(menuForm.value);
    msg = data.msg;
  } else {
    const { data } = await createMenu(menuForm.value);
    msg = data.msg;
  }
  loading.value = false;
  message.success(msg);
  menuShowForm.value = !menuShowForm.value;
  menuList();
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

<style lang="scss" scoped></style>
