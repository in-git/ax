<template>
  <div>
    <a-card class="mt-8" title="用户分配">
      <a-statistic title="已分配的用户" :value="userQuery.total" />
    </a-card>
    <a-button type="primary" block class="mt-8" @click="modal = true">Allocate</a-button>
    <div class="allocate-modal" v-if="modal">
      <div class="flex align-center justify-between px-12 py-8">
        <h3 class="text-16 text-bold mb-12">User list</h3>
        <div class="system-icon" @click="modal = false">
          <CloseOutlined />
        </div>
      </div>
      <div class="p-8">
        <a-table :data-source="users" :columns="columns"></a-table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IQuery } from '@/api/config/types';
import { allocatedList } from '@/api/modules/system/role/role';
import type { UserProfileData } from '@/api/modules/system/user/types';
import columns from '@/views/modules/system/user/table/columns';

const users = ref<UserProfileData[]>([]);
const modal = ref(false);

const userQuery = ref<IQuery>({
  pageNum: 1,
  pageSize: 10,
  total: 0,
});
const getUsers = async () => {
  const { data } = await allocatedList(userQuery.value);
  users.value = data.rows;
  userQuery.value.total = data.total;
};

onMounted(() => {
  getUsers();
});
</script>

<style lang="scss" scoped>
.allocate-modal {
  position: absolute;
  width: 80%;
  height: 90%;
  border: 1px solid #ddd;
  background: #f8f8f8;
  top: 5%;
  left: 10%;
  box-shadow: 0 0 12px #8080804f;
}
.system-icon {
  &:hover {
    background: #eee;
  }
}
</style>
