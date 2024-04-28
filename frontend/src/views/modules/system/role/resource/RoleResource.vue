<template>
  <a-form :model="currentRole" @finish="submit" :wrapper-col="{ span: 8 }" :label-col="{ span: 4 }">
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
      <div v-if="resourceModal && !!currentRole" class="mt-12">
        <a-card>
          <a-form-item label="身份名" name="roleName" required>
            <a-input v-model:value="currentRole.roleName" disabled />
          </a-form-item>

          <a-form-item label="身份标识" name="roleKey" required>
            <a-input v-model:value="currentRole.roleKey" disabled />
          </a-form-item>

          <a-form-item label="范围" name="dataScope" required>
            <a-select v-model:value="currentRole.dataScope" :options="scopedOptions" />
          </a-form-item>

          <a-form-item
            name="deptIds"
            required
            label="选择部门"
            v-if="currentRole.dataScope === '2'"
          >
            <div class="mb-12 flex justify-between">
              <span class="system__subtitle">部门列表</span>
              <a-flex :align="'center'">
                <span class="system__subtitle">
                  父子关联
                  <a-switch v-model:checked="currentRole.deptCheckStrictly"></a-switch>
                </span>
                <a-tooltip title="刷新">
                  <a-button type="ghost" @click="reload">
                    <ReloadOutlined />
                  </a-button>
                </a-tooltip>
              </a-flex>
            </div>
            <a-spin :spinning="loading">
              <a-directory-tree
                :tree-data="treeData"
                :field-names="{
                  key: 'id',
                  title: 'label',
                }"
                selectable
                :check-strictly="currentRole.deptCheckStrictly"
                v-model:selected-keys="currentRole.deptIds"
                ref="treeRef"
              ></a-directory-tree>
            </a-spin>
          </a-form-item>
        </a-card>
      </div>
    </SystemModal>
  </a-form>
</template>

<script setup lang="ts">
import { roleDataScope } from '@/api/modules/system/role/role';
import SystemModal from '@/components/modal/SysModal.vue';
import { message } from 'ant-design-vue';
import { currentRole, roleData } from '../card/data';
import { allocatingResource, roleList } from '../data/curd';
import { resourceModal } from '../data/form';
import { scopedOptions } from '../data/options';
const treeData = ref<any>();
const treeRef = ref();
const loading = ref();
const submit = async () => {
  if (!currentRole.value) return;
  const treeSelectData: any = currentRole.value.deptIds;
  if (!(currentRole.value.deptIds instanceof Array)) {
    currentRole.value.deptIds = treeSelectData.checked.concat(treeSelectData.halfChecked);
  }
  const { data } = await roleDataScope(currentRole.value);
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
  roleData,
  () => {
    treeData.value = roleData.value.deptList;
    loading.value = false;
  },
  {
    deep: true,
    immediate: true,
  },
);
</script>

<style lang="scss" scoped>
::v-deep(.ant-card) {
  box-shadow: none !important;
}
</style>
