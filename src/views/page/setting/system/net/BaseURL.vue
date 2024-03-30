<template>
  <div>
    <a-page-header title=" 开发者设置" class="p-8" />
    <a-card title="选择服务器">
      <div>
        <div class="p-8 server-list">
          <ul class="flex">
            <li
              v-for="item in baseUrlOptions"
              :key="item.value"
              class="text-center flex flex-col gr-4"
            >
              <div>
                <img :src="serverPng" width="48" />
              </div>

              <div class="text-14">
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
              <div>
                <a-button type="text" @click="edit(item)">编辑</a-button>
                <a-button type="link" @click="setBaseurl(`${item.value}`)">切换</a-button>
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
      </div>
    </a-card>

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
          <a-form-item label="Name" name="name" required>
            <a-input v-model:value="serverForm.name" placeholder="Please enter name"></a-input>
          </a-form-item>
          <a-form-item label="Address" required name="url">
            <a-input v-model:value="serverForm.url" placeholder="Please enter url"></a-input>
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
import { useCloned } from '@vueuse/core';
import { Modal } from 'ant-design-vue';
import type { SegmentedOption } from 'ant-design-vue/es/segmented/src/segmented';
import axios from 'axios';
import { nanoid } from 'nanoid';
import serverPng from '../assets/server.png';

const open = ref(false);

const serverForm = ref<URLSelection>({
  name: '',
  url: '',
  id: '',
});
const developer = useDeveloperStore();
const baseUrlOptions: SegmentedOption[] = [
  {
    label: '测试',
    value: 'http://150.158.14.110:8081/',
  },
  {
    label: '若依官网',
    value: 'http://vue.ruoyi.vip/prod-api/',
  },
];
const create = () => {
  open.value = true;
  serverForm.value = {
    name: '',
    url: '',
    id: '',
  };
};
const edit = (item: SegmentedOption) => {
  open.value = true;
  serverForm.value = {
    name: `${item.label}`,
    url: `${item.value}`,
    id: nanoid(),
  };
};
const submit = () => {
  const index = developer.$state.urlSelection.findIndex(e => e.id === serverForm.value.id);
  if (index > -1) {
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
      window.location.reload();
      logout();
    },
  });
  axios.defaults.baseURL = `${url}`;
};
</script>

<style lang="scss" scoped>
.server-list {
  ul {
    gap: 8px;
  }
  li {
    width: 180px;
    border: 1px solid #ddd;
    border-radius: var(--radius);
    padding: 8px 0;
    cursor: pointer;
  }
  .url {
    white-space: nowrap;
    width: 100%;
    background: #f8f8f8;
    overflow: hidden;
    padding: 0 8px;
    text-overflow: ellipsis;
  }
}
.create {
  border: 1px dashed #ddd;
  color: #666;
  &:hover {
    color: #333;
  }
}
.selected {
  color: green;
  font-size: 12px;
}
</style>
