<template>
  <Transition
    enter-active-class="animate__animated animate__slideInDown"
    leave-active-class="animate__animated animate__slideOutDown"
  >
    <div class="role-info" v-if="showRoleForm && currentRole">
      <div class="info-container">
        <a-form
          :model="currentRole"
          @finish="submit"
          layout="vertical"
          class="flex-1 relative h-100 form"
        >
          <a-page-header
            title="Edit role"
            sub-title="This is a subtitle"
            class="sticky page-head py-8"
          >
            <template #extra>
              <div class="system-icon" @click="showRoleForm = false">
                <CloseOutlined />
              </div>
            </template>
          </a-page-header>
          <a-row>
            <a-col :span="12">
              <a-card :bordered="false">
                <a-form-item label="Role name" name="roleName" required>
                  <a-input v-model:value="currentRole.roleName"></a-input>
                </a-form-item>

                <a-form-item label="Sort" name="roleSort" required>
                  <a-input-number
                    class="w-100"
                    v-model:value="currentRole.roleSort"
                  ></a-input-number>
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
                  <a-segmented :options="statusOptions" v-model:value="currentRole.status" />
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

          <FormFooter class="px-12"></FormFooter>
        </a-form>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { createRole, updateRole } from '@/api/modules/system/role/role';
import FormFooter from '@/components/table/form/FormFooter.vue';
import { statusOptions } from '@/global/options/system';
import { message } from 'ant-design-vue';
import { getRoles, resetRoleForm } from '../card/curd';
import { currentRole, roleData } from '../card/data';
import { showRoleForm } from './data';

const treeData = ref<any[]>([]);

const treeRef = ref();
const checkStrictly = ref(true);

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
