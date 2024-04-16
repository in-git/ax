<template>
  <div>
    <TableHead title="用户列表">
      <div class="flex-1">
        <div class="mb-8 flex gc-8 system-subtitle">
          <div>
            用户名
            <a-input allow-clear style="width: 180px" v-model:value="userQuery.userName"></a-input>
          </div>
          <div>
            手机号
            <a-input allow-clear style="width: 180px" v-model:value="userQuery.phonenumber" />
          </div>
          <a-button type="primary" @click="loadUserData">搜索</a-button>
        </div>
        <div class="flex justify-between">
          <div class="flex gc-4">
            <a-tooltip title="新建用户">
              <a-button type="primary" @click="createUser">
                <PlusOutlined />
              </a-button>
            </a-tooltip>

            <a-tooltip title="刷新">
              <a-button @click="loadUserData">
                <ReloadOutlined />
              </a-button>
            </a-tooltip>
            <a-tooltip title="编辑">
              <a-button @click="editUserConfig()" :disabled="userConfig.selectedKeys.length !== 1">
                <EditOutlined />
              </a-button>
            </a-tooltip>

            <a-tooltip title="导出">
              <a-button @click="exportExcel">
                <ExportOutlined />
              </a-button>
            </a-tooltip>
          </div>
          <div class="flex gc-4 align-center">
            <a-segmented
              :options="setOptions('启用', '禁用')"
              v-model:value="userQuery.status"
              @change="loadUserData"
            ></a-segmented>
            <a-divider type="vertical"></a-divider>
            <a-button @click="delUser()" danger>
              <DeleteOutlined />
            </a-button>
          </div>
        </div>
      </div>
    </TableHead>
  </div>
</template>

<script setup lang="ts">
import { exportFile } from '@/api/utils/file';
import { setOptions } from '@/global/options/system';
import { DeleteOutlined, ExportOutlined, ReloadOutlined } from '@ant-design/icons-vue';
import { createUser, delUser, editUserConfig, loadUserData } from '../data/curd';
import { userConfig, userQuery } from '../data/data';

const exportExcel = async () => {
  await exportFile({
    url: `system/user/export`,
    data: {
      pageNum: userQuery.value.pageNum,
      pageSize: userQuery.value.pageSize,
    },
    fileName: '用户表',
    method: 'POST',
  });
  // const { data } = await exportExcel(userQuery.value);
};
</script>

<style lang="scss" scoped></style>
