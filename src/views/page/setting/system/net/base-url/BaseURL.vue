<template>
  <div>
    <a-page-header title="网络设置" class="px-0 py-8" />
    <div>
      <div class="mb-12 text-999">选择服务器</div>
      <a-card :body-style="{ maxHeight: '400px', overflowY: 'auto' }">
        <div class="p-8 server-list">
          <ul class="flex flex-wrap">
            <li
              v-for="item in developer.$state.urlSelection"
              :key="item.value"
              class="text-center flex flex-col gr-4"
              :class="[{ 'breathing-light': developer.$state.baseURL === item.value }]"
            >
              <div>
                <img :src="serverPng" width="48" />
              </div>

              <div class="text-14 text-bold">
                {{ item.label }}
              </div>
              <div :class="[developer.$state.baseURL == item.value ? 'selected' : 'unselected']">
                <a-badge color="green" v-if="developer.$state.baseURL === item.value">
                  <template #text>
                    <span class="text-12 text-999">当前连接</span>
                  </template>
                </a-badge>
                <a-badge v-else color="red">
                  <template #text>
                    <span class="text-12 text-999">未连接</span>
                  </template>
                </a-badge>
              </div>
              <div class="url">
                {{ item.value }}
              </div>
              <a-divider class="my-6"></a-divider>
              <div class="text-center">
                <a-tooltip title="切换">
                  <a-button type="link" @click="setBaseurl(item.value)">
                    <NodeExpandOutlined />
                  </a-button>
                </a-tooltip>
                <a-tooltip title="编辑">
                  <a-button type="text" @click="edit(item)">
                    <EditOutlined />
                  </a-button>
                </a-tooltip>
                <a-popconfirm @confirm="deleteUrl(item.id)" title="确定删除吗">
                  <a-button type="link" danger>
                    <DeleteOutlined />
                  </a-button>
                </a-popconfirm>
              </div>
            </li>
            <li class="create flex flex-s" @click="create">
              <div class="text-16 text-center">
                <PlusOutlined class="text-24" />
                <div>新建</div>
              </div>
            </li>
          </ul>
        </div>
      </a-card>
    </div>
    <a-drawer
      title="Create server"
      placement="right"
      :open="open"
      :get-container="false"
      :style="{ position: 'absolute' }"
      @close="open = false"
    >
      <a-card>
        <a-form
          :label-col="{
            span: 6,
          }"
          @finish="submit"
          :model="serverForm"
        >
          <a-form-item label="Name" name="label" required>
            <a-input v-model:value="serverForm.label" placeholder="Please enter name"></a-input>
          </a-form-item>
          <a-form-item label="Address" required name="value">
            <a-input v-model:value="serverForm.value" placeholder="Please enter url"></a-input>
          </a-form-item>
          <a-row>
            <a-col :span="18" :offset="6">
              <a-button type="primary" htmlType="submit">确定</a-button>
            </a-col>
          </a-row>
        </a-form>
      </a-card>
    </a-drawer>
  </div>
</template>

<script setup lang="ts">
import { logout } from '@/api/modules/system/user/user';
import useDeveloperStore from '@/store/developer/index';
import type { URLSelection } from '@/store/developer/types';
import { NodeExpandOutlined } from '@ant-design/icons-vue';
import { useCloned } from '@vueuse/core';
import { Modal } from 'ant-design-vue';
import axios from 'axios';
import serverPng from '../../assets/server.png';

const open = ref(false);
const serverForm = ref<URLSelection>({
  label: '',
  value: '',
  id: '',
});
const developer = useDeveloperStore();

const create = () => {
  open.value = true;
  serverForm.value = {
    label: '',
    value: '',
    id: '',
  };
};
const edit = (item: URLSelection) => {
  open.value = true;
  serverForm.value = {
    label: `${item.label}`,
    value: `${item.value}`,
    id: item.id,
  };
};

const submit = () => {
  const index = developer.$state.urlSelection.findIndex(e => e.id === serverForm.value.id);
  if (index >= 0) {
    developer.$state.urlSelection[index] = serverForm.value;
  } else {
    developer.$state.urlSelection.push(useCloned(serverForm.value).cloned.value);
  }
  open.value = false;
};

const setBaseurl = (url: string) => {
  Modal.confirm({
    title: 'Server switched',
    content: 'Whether to refresh the page immediately',
    onOk() {
      developer.$state.baseURL = url;
      axios.defaults.baseURL = `${url}`;
      window.location.reload();
      logout();
    },
  });
};

const deleteUrl = (id: string) => {
  developer.$state.urlSelection = developer.$state.urlSelection.filter(e => e.id !== id);
};
</script>

<style lang="scss" scoped>
@import './style';
</style>
