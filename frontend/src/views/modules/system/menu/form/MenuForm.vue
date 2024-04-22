<template>
  <SystemModal v-model:visible="showMenuForm" title="菜单配置">
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
      <a-card class="flex-1" :body-style="{ height: `500px`, overflowY: 'auto' }" title="基础配置">
        <template #extra>
          <a-button type="primary" :loading="loading" htmlType="submit">保存</a-button>
        </template>
        <a-row :gutter="16">
          <a-col :span="14">
            <a-form-item label="菜单名" name="menuName" required>
              <a-input v-model:value="menuForm.menuName"></a-input>
            </a-form-item>

            <a-form-item label="图标" name="icon">
              <a-input allow-clear v-model:value="menuForm.icon">
                <template #addonAfter>
                  <a-popover trigger="click" placement="leftBottom" v-model:open="visible">
                    <a-tooltip title="选择图标">
                      <div class="w-100 h-100 cursor-pointer">
                        <SmileOutlined />
                      </div>
                    </a-tooltip>
                    <template #content>
                      <div>
                        <IconSelector
                          @update:model-value="visible = false"
                          v-model="menuForm.icon"
                        />
                      </div>
                    </template>
                  </a-popover>
                </template>
              </a-input>
            </a-form-item>

            <a-form-item label="选择父级菜单" name="parentId" required>
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

            <a-form-item label="排序" name="orderNum" required>
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
            <ParamVue />
          </a-col>
        </a-row>
      </a-card>
    </a-form>
  </SystemModal>
</template>

<script setup lang="ts">
import { createMenu, updateMenu } from '@/api/modules/system/menu/menu';
import SystemModal from '@/components/modal/SysModal.vue';
import { statusOptions, visibleOptions } from '@/global/options/system';
import IconSelector from '@/views/selector/icon/IconSelector.vue';
import { SmileOutlined } from '@ant-design/icons-vue';
import { message } from 'ant-design-vue';
import { loadMenuData } from '../data/curd';
import { listMenu, menuTableConfig } from '../data/data';
import { menuForm, showMenuForm } from '../data/form';
import { menuTypeOptions } from '../data/options';
import ParamVue from './Params.vue';

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
