<template>
  <a-card class="table__head">
    <template #title>
      <h3 class="text-14">网页收藏</h3>
    </template>

    <a-flex class="mb-12" :gap="12" wrap="wrap">
      <div>
        <a-input
          @blur="galleryList"
          v-model:value="galleryQuery.imageName"
          style="width: 160px"
          placeholder="请输入图片名"
          allow-clear
        ></a-input>
      </div>
      <div>
        <a-input
          @blur="galleryList"
          v-model:value="galleryQuery.type"
          style="width: 160px"
          placeholder="请输入图片类型"
          allow-clear
        ></a-input>
      </div>
      <div>
        <a-input
          @blur="galleryList"
          v-model:value="galleryQuery.imageUrl"
          style="width: 160px"
          placeholder="请输入图片URL"
          allow-clear
        ></a-input>
      </div>
      <a-button type="primary" @click="galleryList">搜索</a-button>
    </a-flex>

    <a-flex justify="space-between" :align="'center'">
      <a-flex justify="space-between" :align="'center'">
        <a-flex :align="'center'" :gap="4">
          <div v-perm="'system:gallery:add'">
            <a-tooltip title="新建">
              <a-button type="primary" @click="galleryCreate">
                <PlusOutlined />
              </a-button>
            </a-tooltip>
          </div>

          <div v-perm="'system:gallery:edit'">
            <a-tooltip title="编辑">
              <a-button type="link" @click="galleryEdit()" :disabled="galleryKeys.length !== 1">
                <EditOutlined />
              </a-button>
            </a-tooltip>
          </div>

          <a-tooltip title="刷新">
            <a-button type="link" @click="galleryList">
              <ReloadOutlined />
            </a-button>
          </a-tooltip>
        </a-flex>
      </a-flex>
      <a-flex>
        <div v-perm="'system:gallery:delete'">
          <a-popconfirm
            title="确定要删除吗"
            :disabled="galleryKeys.length === 0"
            placement="bottomRight"
            @confirm="galleryDelete()"
          >
            <a-tooltip title="批量删除">
              <a-button danger type="link" :disabled="galleryKeys.length === 0">
                <DeleteOutlined />
              </a-button>
            </a-tooltip>
          </a-popconfirm>
        </div>

        <FieldVue :columns="galleryColumns" :module-name="galleryTable.moduleName" />
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
import { galleryColumns } from '../../data/column';
import { galleryCreate, galleryDelete, galleryEdit, galleryList } from '../../data/curd';
import {} from '../../data/options';
import { galleryKeys, galleryQuery, galleryTable, viewMode } from '../../data/table';
</script>

<style lang="scss" scoped></style>
