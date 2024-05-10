<template>
  <a-form :model="roleForm" @finish="submit" :wrapper-col="{ span: 8 }" :label-col="{ span: 4 }">
    <SystemModal
      w="90%"
      h="90%"
      v-model:visible="resourceModal"
      title="身份资源分配"
      @update:visible="resourceModal = false"
    >
      <a-card>
        <a-flex :justify="'space-between'">
          <div>
            <div>资源分配</div>
          </div>
          <a-button type="primary" :loading="loading" htmlType="submit">保存</a-button>
        </a-flex>
      </a-card>
      <div v-if="resourceModal && !!roleForm" class="mt-12">
        <a-card>
          <a-form-item label="身份名" name="roleName" required>
            <a-input v-model:value="roleForm.roleName" disabled />
          </a-form-item>

          <a-form-item label="身份标识" name="roleKey" required>
            <a-input v-model:value="roleForm.roleKey" disabled />
          </a-form-item>

          <a-form-item label="范围" name="dataScope" required>
            <a-select v-model:value="roleForm.dataScope" :options="scopedOptions" />
          </a-form-item>

          <template v-if="roleForm.dataScope === '2'">
            <a-form-item label="父子关联">
              <span class="system__subtitle">
                <a-switch v-model:checked="roleForm.deptCheckStrictly"></a-switch>
              </span>
            </a-form-item>
            <a-form-item name="deptIds" required label="选择部门">
              <a-flex justify="space-between" class="mb-12 flex justify-between">
                <span class="system__subtitle">部门列表</span>
                <a-tooltip title="刷新">
                  <a-button type="ghost" @click="reload">
                    <ReloadOutlined />
                  </a-button>
                </a-tooltip>
              </a-flex>
              <a-spin :spinning="loading">
                <a-tree-select
                  :tree-data="deptList"
                  tree-checkable
                  :field-names="{
                    value: 'id',
                    label: 'label',
                  }"
                  multiple
                  :show-checked-strategy="SHOW_PARENT"
                  :treeCheckStrictly="!roleForm.deptCheckStrictly"
                  v-model:value="roleForm.deptIds"
                ></a-tree-select>
              </a-spin>
            </a-form-item>
          </template>
        </a-card>
      </div>
    </SystemModal>
  </a-form>
</template>

<script setup lang="ts">
import { roleDataScope } from '@/api/modules/system/role/role';
import SystemModal from '@/components/modal/SysModal.vue';
import { message, TreeSelect } from 'ant-design-vue';
import { allocatingResource, roleList } from '../../data/curd';
import { resourceModal, roleForm } from '../../data/form';
import { scopedOptions } from '../../data/options';
import { deptList, roleTable } from '../../data/table';

const SHOW_PARENT = TreeSelect.SHOW_PARENT;
const treeData = ref<any>();
const loading = ref();
const submit = async () => {
  if (!roleForm.value) return;
  const treeSelectData: any = roleForm.value.deptIds;
  if (!(roleForm.value.deptIds instanceof Array)) {
    roleForm.value.deptIds = treeSelectData.checked.concat(treeSelectData.halfChecked);
  }
  const { data } = await roleDataScope(roleForm.value);
  message.success(data.msg);
  resourceModal.value = false;
  roleList();
};
const reload = async () => {
  loading.value = true;
  await allocatingResource();
  loading.value = false;
};

watch(
  roleTable,
  () => {
    treeData.value = deptList.value;
    loading.value = false;
  },
  {
    deep: true,
    immediate: true,
  },
);
</script>

<style lang="scss" scoped>
:deep(.ant-card) {
  box-shadow: none !important;
}
</style>
