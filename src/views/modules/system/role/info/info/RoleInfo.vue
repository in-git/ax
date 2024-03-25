<template>
  <div>
    <a-card v-if="!currentRole">
      <a-empty description="Please select a role to preview"></a-empty>
    </a-card>
    <a-form
      v-else
      :model="currentRole"
      layout="vertical"
      @finish="submit"
      class="flex-1 relative h-100"
    >
      <a-tabs>
        <a-tab-pane tab="Config" key="info">
          <a-form-item label="Role name" name="roleName" required>
            <a-input v-model:value="currentRole.roleName"></a-input>
          </a-form-item>

          <a-form-item label="Sort" name="roleSort" required>
            <a-input-number class="w-100" v-model:value="currentRole.roleSort"></a-input-number>
          </a-form-item>

          <a-form-item label="Perms" name="roleKey" required>
            <a-input class="w-100" v-model:value="currentRole.roleKey"></a-input>
          </a-form-item>

          <a-form-item label="Role name" name="remark" required>
            <a-textarea
              :autoSize="{ minRows: 2, maxRows: 4 }"
              v-model:value="currentRole.remark"
            ></a-textarea>
          </a-form-item>
          <a-form-item label="Status">
            <a-radio-group
              class="w-100"
              :options="statusOptions"
              v-model:value="currentRole.status"
            />
          </a-form-item>
        </a-tab-pane>
        <a-tab-pane tab="Menu" key="menu">
          <a-form-item label="分配菜单" :wrapper-col="{ span: 24 }">
            <div class="flex align-center mb-8">
              <span class="text-12 text-999 mr-4">父子关联</span>
              <a-switch v-model:checked="checkStrictly"></a-switch>
            </div>
            <a-card :body-style="{ maxHeight: '450px', overflowY: 'auto' }">
              <a-tree
                :treeData="treeData"
                checkable
                v-model:checked-keys="roleData.menuKeys"
                :fieldNames="{
                  key: 'id',
                  title: 'label',
                }"
                default-expand-all
                :check-strictly="!checkStrictly"
              ></a-tree>
            </a-card>
          </a-form-item>
        </a-tab-pane>
      </a-tabs>
      <FormFooter class="px-0"></FormFooter>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import FormFooter from '@/components/table/form/FormFooter.vue';
import { statusOptions } from '@/global/options/system';
import { currentRole, roleData } from '../../card/data';

const treeData = ref<any[]>([]);
const checkStrictly = ref(true);

const submit = () => {
  console.log('=');
};
watch(
  roleData,
  () => {
    treeData.value = roleData.value.roleMenus;
  },
  {
    deep: true,
    immediate: true,
  },
);
</script>

<style lang="scss" scoped></style>
