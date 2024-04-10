<template>
  <div class="flex">
    <a-modal v-model:open="createMenuForm" title="创建菜单" centered footer width="400px">
      <a-card>
        <a-form @finish="submit" size="middle" :model="shortcutForm" layout="vertical">
          <a-form-item label="菜单名" required name="menuName">
            <a-input placeholder="请输入菜单名" v-model:value="shortcutForm.menuName"></a-input>
          </a-form-item>
          <a-form-item label="位置">
            <a-input-number class="w-100" v-model:value="shortcutForm.orderNum"></a-input-number>
          </a-form-item>
          <a-button html-type="submit" type="primary" block>确定</a-button>
        </a-form>
      </a-card>
    </a-modal>
  </div>
</template>

<script setup lang="ts">
import { createMenu, updateMenu } from '@/api/modules/system/menu/menu';
import { response } from '@/utils/table/table';
import { userRouters } from '../data';
import { createMenuForm, shortcutForm } from './data';

watch(createMenuForm, () => {
  shortcutForm.value.orderNum = userRouters.value.length + 1;
});

const submit = async () => {
  if (shortcutForm.value.menuId) {
    await response(updateMenu, shortcutForm.value);
  } else {
    await response(createMenu, shortcutForm.value);
  }
  createMenuForm.value = false;
};
</script>

<style lang="scss" scoped></style>
