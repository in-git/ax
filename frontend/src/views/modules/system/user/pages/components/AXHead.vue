<template>
  <a-card class="ax_sticky_top">
    <template #title>用户信息</template>

    <a-flex class="mb-12" :gap="12" wrap="wrap">
      <Dept />
      <div>
        <a-input
          v-model:value="userQuery.userName"
          style="width: 160px"
          placeholder="请输入用户账号"
          @press-enter="userList"
          allow-clear
        ></a-input>
      </div>
      <div>
        <a-input
          v-model:value="userQuery.nickName"
          style="width: 160px"
          placeholder="请输入用户昵称"
          @press-enter="userList"
          allow-clear
        ></a-input>
      </div>
      <div>
        <a-input
          v-model:value="userQuery.phonenumber"
          style="width: 160px"
          placeholder="请输入手机号码"
          @press-enter="userList"
          allow-clear
        ></a-input>
      </div>
      <a-button type="primary" @click="userList">搜索</a-button>
    </a-flex>

    <a-flex justify="space-between" :align="'center'">
      <a-flex justify="space-between" :align="'center'">
        <a-flex :align="'center'" :gap="4">
          <div v-perm="'system:user:add'">
            <a-tooltip title="新建">
              <a-button type="primary" @click="userCreate">
                <PlusOutlined />
              </a-button>
            </a-tooltip>
          </div>

          <div v-perm="'system:user:edit'">
            <a-tooltip title="编辑">
              <a-button type="link" @click="userEdit()" :disabled="userKeys.length !== 1">
                <EditOutlined />
              </a-button>
            </a-tooltip>
          </div>
          <div v-perm="'system:notice:list'">
            <a-tooltip title="刷新">
              <a-button type="link" @click="userList">
                <ReloadOutlined />
              </a-button>
            </a-tooltip>
          </div>
          <div v-perm="'system:user:remove'">
            <a-popconfirm
              title="确定要删除吗"
              :disabled="userKeys.length === 0"
              placement="bottomRight"
              @confirm="userDelete()"
            >
              <a-tooltip title="批量删除">
                <a-button danger type="link" :disabled="userKeys.length === 0">
                  <DeleteOutlined />
                </a-button>
              </a-tooltip>
            </a-popconfirm>
          </div>
        </a-flex>
      </a-flex>
      <a-flex>
        <div v-perm="'system:user:export'">
          <a-tooltip title="导出">
            <a-button type="link" @click="userExport">
              <ExportOutlined />
            </a-button>
          </a-tooltip>
        </div>

        <FieldVue :columns="userColumns" :module-name="userTable.moduleName" />
        <div>
          <a-tooltip title="卡片模式" @click="viewMode = 'card'" v-if="viewMode === 'table'">
            <a-button type="link">
              <OrderedListOutlined />
            </a-button>
          </a-tooltip>

          <a-tooltip title="表格模式" @click="viewMode = 'table'" v-else>
            <a-button type="link">
              <AppstoreAddOutlined />
            </a-button>
          </a-tooltip>
        </div>
      </a-flex>
    </a-flex>
  </a-card>
</template>

<script setup lang="ts">
import FieldVue from '@/views/components/table/Field.vue';
import {
  AppstoreAddOutlined,
  OrderedListOutlined,
  type DeleteOutlined,
  type ReloadOutlined,
} from '@ant-design/icons-vue';
import { userColumns } from '../../data/column';
import { userCreate, userDelete, userEdit, userExport, userList } from '../../data/curd';
import {} from '../../data/options';
import { userKeys, userQuery, userTable, viewMode } from '../../data/table';
import Dept from './dept/Dept.vue';
</script>

<style lang="scss" scoped></style>
