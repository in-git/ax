<template>
  <div>
    <TableHead title="User list">
      <div class="flex justify-between">
        <div class="flex gc-4">
          <a-button type="primary">Create</a-button>
          <a-button @click="loadUserData">Reload</a-button>
          <a-button @click="delUser" danger>Delete</a-button>
          <a-button @click="exportExcel">
            <ExportOutlined />
            Export
          </a-button>
        </div>
        <div>
          <a-segmented
            :options="setOptions('Normal', 'Disabled')"
            v-model:value="userQuery.status"
            @change="loadUserData"
          ></a-segmented>
        </div>
      </div>

      <div class="mt-8 flex gc-8 text-999">
        <div>
          Username
          <a-input allow-clear style="width: 180px" v-model:value="userQuery.userName"></a-input>
        </div>
        <div>
          Phone
          <a-input allow-clear style="width: 180px" v-model:value="userQuery.phonenumber" />
        </div>
        <a-button type="primary" @click="loadUserData">Search</a-button>
      </div>
    </TableHead>
  </div>
</template>

<script setup lang="ts">
import { exportFile } from '@/api/utils/file';
import { setOptions } from '@/global/options/system';
import { ExportOutlined } from '@ant-design/icons-vue';
import { delUser } from '../table/curd';
import { loadUserData, userQuery } from './data';

const exportExcel = async () => {
  await exportFile(`system/user/export`, {
    pageNum: userQuery.value.pageNum,
    pageSize: userQuery.value.pageSize,
  });
  // const { data } = await exportExcel(userQuery.value);
  // console.log(data);
};
</script>

<style lang="scss" scoped></style>
