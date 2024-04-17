<template>
  <a-card class="card__container" :bordered="false">
    <template #title>
      <div class="system-subtitle">选择服务器</div>
    </template>
    <template #extra>
      <a-button type="primary" @click="create">
        新建
        <template #icon>
          <PlusOutlined />
        </template>
      </a-button>
    </template>
    <a-flex wrap="wrap" :gap="8">
      <a-card
        v-for="item in developer.$state.developer.urlSelection"
        class="item"
        :class="[{ 'breathing-light': developer.$state.developer.baseURL === item.value }]"
      >
        <a-card-meta :title="item.label">
          <template #description>
            <div class="url">
              {{ item.value }}
            </div>
          </template>
        </a-card-meta>
        <template #actions>
          <a-tooltip title="切换">
            <div @click="setBaseurl(item.value)">切换</div>
          </a-tooltip>
          <a-tooltip title="编辑">
            <div @click="edit(item)">编辑</div>
          </a-tooltip>
          <a-popconfirm @confirm="deleteUrl(item.id)" title="确定删除吗">
            <div>删除</div>
          </a-popconfirm>
        </template>
      </a-card>
    </a-flex>
  </a-card>
  <a-modal :footer="false" title="创建服务器" centered v-model:open="open" width="400px">
    <a-card>
      <a-form layout="vertical" @finish="submit" :model="serverForm">
        <a-form-item label="服务器名" name="label" required>
          <a-input v-model:value="serverForm.label" placeholder="请输入名字"></a-input>
        </a-form-item>
        <a-form-item label="IP地址" required name="value">
          <a-input v-model:value="serverForm.value" placeholder="请输入IP地址"></a-input>
        </a-form-item>
        <div>
          <a-button type="primary" htmlType="submit" block>确定</a-button>
        </div>
      </a-form>
    </a-card>
  </a-modal>
</template>

<script setup lang="ts">
import { userLogout } from '@/api/modules/system/user/utils';
import useSystemStore from '@/store/system';
import type { URLSelection } from '@/store/system/types';
import { useCloned } from '@vueuse/core';
import { Modal } from 'ant-design-vue';
import axios from 'axios';

const open = ref(false);
const serverForm = ref<URLSelection>({
  label: '',
  value: '',
  id: '',
});
const developer = useSystemStore();

const create = () => {
  open.value = true;
  serverForm.value = {
    label: '',
    value: 'http://',
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
  const index = developer.$state.developer.urlSelection.findIndex(
    e => e.id === serverForm.value.id,
  );
  if (index >= 0) {
    developer.$state.developer.urlSelection[index] = serverForm.value;
  } else {
    developer.$state.developer.urlSelection.push(useCloned(serverForm.value).cloned.value);
  }
  open.value = false;
};

const setBaseurl = (url: string) => {
  Modal.confirm({
    title: '切换服务器',
    content: '这将会刷新页面,且会清空登陆信息',
    centered: true,
    async onOk() {
      developer.$state.developer.baseURL = url;
      axios.defaults.baseURL = `${url}`;
      await userLogout();
      window.location.reload();
    },
  });
};

const deleteUrl = (id: string) => {
  developer.$state.developer.urlSelection = developer.$state.developer.urlSelection.filter(
    e => e.id !== id,
  );
};
</script>

<style lang="scss" scoped>
@import './style';
</style>
