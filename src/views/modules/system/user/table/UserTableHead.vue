<template>
  <div>
    <TableHead title="User list">
      <div class="mb-8 flex gc-8 text-999">
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

      <div class="flex justify-between">
        <div class="flex gc-4">
          <a-tooltip title="Create">
            <a-button type="primary" @click="createUser">
              <PlusOutlined />
            </a-button>
          </a-tooltip>

          <a-tooltip title="Refresh">
            <a-button @click="loadUserData">
              <ReloadOutlined />
            </a-button>
          </a-tooltip>
          <a-tooltip title="Edit">
            <a-button @click="editUserConfig()" :disabled="userConfig.selectedKeys.length !== 1">
              <EditOutlined />
            </a-button>
          </a-tooltip>

          <a-tooltip title="Export">
            <a-button @click="exportExcel">
              <ExportOutlined />
            </a-button>
          </a-tooltip>
        </div>
        <div class="flex gc-4 align-center">
          <a-segmented
            :options="setOptions('Normal', 'Disabled')"
            v-model:value="userQuery.status"
            @change="loadUserData"
          ></a-segmented>
          <a-divider type="vertical"></a-divider>
          <a-button @click="delUser()" danger>
            <DeleteOutlined />
          </a-button>
        </div>
      </div>
    </TableHead>
  </div>
</template>

<script setup lang="ts">
import { exportFile } from '@/api/utils/file';
import { setOptions } from '@/global/options/system';
import { DeleteOutlined, ExportOutlined, ReloadOutlined } from '@ant-design/icons-vue';
import { createUser, delUser, editUserConfig } from '../table/curd';
import { loadUserData, userConfig, userQuery } from './data';
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
