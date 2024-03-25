<template>
  <div class="role-info p-8 flex flex-col">
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
        <a-tab-pane tab="Info" key="info">
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
              :autosize="{ minRows: 2, maxRows: 4 }"
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
          <a-tree></a-tree>
        </a-tab-pane>
        <a-tab-pane tab="User" key="user"></a-tab-pane>
      </a-tabs>

      <FormFooter></FormFooter>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import FormFooter from '@/components/table/form/FormFooter.vue';
import { statusOptions } from '@/global/options/system';
import { currentRole } from '../card/data';

const submit = () => {
  console.log('=');
};
</script>

<style lang="scss" scoped>
.role-info {
  flex-basis: 200px;
  height: 100%;
  background: #f7fafc;
}
::v-deep(.ant-form-item) {
  margin-bottom: 18px;
}
</style>
