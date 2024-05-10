<template>
  <a-form :model="roleForm" @finish="submit" :label-col="{ span: 6 }" label-align="left">
    <SystemModal
      w="90%"
      h="90%"
      v-model:visible="showRoleForm"
      title="管理身份"
      @update:visible="showRoleForm = false"
    >
      <div v-if="roleForm" class="h-100 flex flex-col">
        <div class="flex-1">
          <a-card class="table__head">
            <a-flex justify="space-between">
              <div>身份管理</div>
              <a-button type="primary" :loading="loading" htmlType="submit">保存</a-button>
            </a-flex>
          </a-card>
          <a-card class="mt-12">
            <a-row>
              <a-col :span="12">
                <a-card :bordered="false">
                  <a-form-item label="身份名称" name="roleName" required>
                    <a-input v-model:value="roleForm.roleName"></a-input>
                  </a-form-item>

                  <a-form-item label="排序" name="roleSort" required>
                    <a-input-number
                      class="w-100"
                      v-model:value="roleForm.roleSort"
                    ></a-input-number>
                    <div class="text-12 system__subtitle">
                      <InfoCircleFilled />
                      数字越小，排序靠前
                    </div>
                  </a-form-item>

                  <a-form-item label="身份标识" name="roleKey" required>
                    <a-input class="w-100" v-model:value="roleForm.roleKey"></a-input>
                  </a-form-item>

                  <a-form-item label="身份描叙" name="remark">
                    <a-textarea
                      :autoSize="{ minRows: 2, maxRows: 4 }"
                      v-model:value="roleForm.remark"
                      placeholder="用于描述该身份的作用"
                    ></a-textarea>
                  </a-form-item>
                  <a-form-item label="状态" required>
                    <a-segmented
                      :options="setOptions('启用', '禁用')"
                      v-model:value="roleForm.status"
                    />
                  </a-form-item>
                </a-card>
              </a-col>
              <a-col :span="12">
                <a-form-item :label-col="{ span: 24 }">
                  <a-card :body-style="{ height: '370px', overflowY: 'auto' }" title="分配菜单">
                    <template #extra>
                      <div class="flex align-center mb-8">
                        <span class="text-12 system__subtitle mr-4">父子关联</span>
                        <a-switch v-model:checked="roleForm.menuCheckStrictly"></a-switch>
                      </div>
                    </template>

                    <a-tree
                      :treeData="treeData"
                      checkable
                      block-node
                      :selectable="false"
                      v-model:checked-keys="roleForm.menuIds"
                      :fieldNames="{
                        key: 'id',
                        title: 'label',
                      }"
                      default-expand-parent
                      :check-strictly="!roleForm.menuCheckStrictly"
                      ref="treeRef"
                    ></a-tree>
                  </a-card>
                </a-form-item>
              </a-col>
            </a-row>
          </a-card>
        </div>
      </div>
    </SystemModal>
  </a-form>
</template>

<script setup lang="ts">
import { createRole, updateRole } from '@/api/modules/system/role/role';
import SystemModal from '@/components/modal/SysModal.vue';
import { setOptions } from '@/global/options/system';
import { message } from 'ant-design-vue';

import { roleList } from '../../data/curd';
import { roleForm, roleResetForm, showRoleForm } from '../../data/form';
import { roleMenus } from '../../data/table';
const treeData = ref<any[]>([]);
const loading = ref(false);

const treeRef = ref();

const submit = async () => {
  loading.value = true;
  if (roleForm.value) {
    let data: any = roleForm.value.menuIds;
    const halfCheckedKeys: number[] = treeRef.value.halfCheckedKeys;
    let menuIds: number[] = [];
    if (data.checked) {
      menuIds = data.checked.concat(data.halfCheckedKeys || []);
    } else {
      menuIds = roleForm.value.menuIds;
    }
    if (halfCheckedKeys && halfCheckedKeys.length > 0) {
      menuIds = menuIds.concat(halfCheckedKeys);
    }

    menuIds = Array.from(new Set(menuIds));

    if (roleForm.value.roleId) {
      const { data } = await updateRole({
        ...roleForm.value,
        menuIds,
      });
      message.success(data.msg);
    } else {
      const { data } = await createRole(roleForm.value);
      message.success(data.msg);
    }
    loading.value = false;
    await roleList();
    roleResetForm();
    showRoleForm.value = false;
  }
};
watch(
  roleMenus,
  () => {
    treeData.value = roleMenus.value;
  },
  {
    deep: true,
    immediate: true,
  },
);
</script>

<style lang="scss" scoped>
.role-info {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #33333356;
  display: flex;
  align-items: center;
  justify-content: center;

  .info-container {
    width: 90%;
    height: 90%;
    overflow-y: auto;
    background: white;
    border-radius: var(--radius);
  }
}
.page-head {
  top: 0;
  z-index: 100;
  background: white;
  border-bottom: 1px solid #ddd;
}
:deep(.ant-card) {
  box-shadow: none;
}
</style>
