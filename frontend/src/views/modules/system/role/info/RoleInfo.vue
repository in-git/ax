<template>
  <a-form :model="currentRole" @finish="submit" layout="vertical">
    <SystemModal
      w="90%"
      h="90%"
      v-model:visible="showRoleForm"
      title="管理身份"
      @update:visible="showRoleForm = false"
    >
      <div v-if="showRoleForm && currentRole" class="h-100 flex flex-col">
        <div class="flex-1">
          <a-row>
            <a-col :span="12">
              <a-card :bordered="false">
                <a-form-item label="身份名" name="roleName" required>
                  <a-input v-model:value="currentRole.roleName"></a-input>
                </a-form-item>

                <a-form-item label="排序" name="roleSort" required>
                  <a-input-number
                    class="w-100"
                    v-model:value="currentRole.roleSort"
                  ></a-input-number>
                  <div class="text-12 text-999">
                    <InfoCircleFilled />
                    数字越小，排序靠前
                  </div>
                </a-form-item>

                <a-form-item label="身份标识" name="roleKey" required>
                  <a-input class="w-100" v-model:value="currentRole.roleKey"></a-input>
                </a-form-item>

                <a-form-item label="身份描叙" name="remark">
                  <a-textarea
                    :autoSize="{ minRows: 2, maxRows: 4 }"
                    v-model:value="currentRole.remark"
                    placeholder="用于描述该身份的作用"
                  ></a-textarea>
                </a-form-item>
                <a-form-item label="状态" required>
                  <a-segmented
                    :options="setOptions('启用', '禁用')"
                    v-model:value="currentRole.status"
                  />
                </a-form-item>
              </a-card>
            </a-col>
            <a-col :span="12">
              <a-card class="mt-8" :bordered="false">
                <a-form-item label="分配菜单" :label-col="{ span: 24 }">
                  <div class="flex align-center mb-8">
                    <span class="text-12 text-999 mr-4">父子关联</span>
                    <a-switch v-model:checked="checkStrictly"></a-switch>
                  </div>
                  <a-card :body-style="{ height: '370px', overflowY: 'auto' }">
                    <a-tree
                      :treeData="treeData"
                      checkable
                      block-node
                      :selectable="false"
                      v-model:checked-keys="currentRole.menuIds"
                      :fieldNames="{
                        key: 'id',
                        title: 'label',
                      }"
                      default-expand-parent
                      :check-strictly="!checkStrictly"
                      ref="treeRef"
                    ></a-tree>
                  </a-card>
                </a-form-item>
              </a-card>
            </a-col>
          </a-row>
        </div>
        <FormFooter class="px-12"></FormFooter>
      </div>
    </SystemModal>
  </a-form>
</template>

<script setup lang="ts">
import { createRole, updateRole } from '@/api/modules/system/role/role';
import SystemModal from '@/components/modal/SysModal.vue';
import FormFooter from '@/components/table/form/FormFooter.vue';
import { setOptions } from '@/global/options/system';
import { message } from 'ant-design-vue';
import { getRoles, resetRoleForm } from '../card/curd';
import { currentRole, roleData } from '../card/data';
import { showRoleForm } from './data';

const treeData = ref<any[]>([]);

const treeRef = ref();
const checkStrictly = ref(false);

const submit = async () => {
  if (currentRole.value) {
    let data: any = currentRole.value.menuIds;
    const halfCheckedKeys: number[] = treeRef.value.halfCheckedKeys;
    let menuIds: number[] = [];
    if (data.checked) {
      menuIds = data.checked.concat(data.halfCheckedKeys || []);
    } else {
      menuIds = currentRole.value.menuIds;
    }
    if (halfCheckedKeys && halfCheckedKeys.length > 0) {
      menuIds = menuIds.concat(halfCheckedKeys);
    }

    menuIds = Array.from(new Set(menuIds));

    if (currentRole.value.roleId) {
      const { data } = await updateRole({
        ...currentRole.value,
        menuIds,
      });
      message.success(data.msg);
    } else {
      const { data } = await createRole(currentRole.value);
      message.success(data.msg);
    }

    await getRoles();
    resetRoleForm();
    showRoleForm.value = false;
  }
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
::v-deep(.ant-card) {
  box-shadow: none;
}
</style>
