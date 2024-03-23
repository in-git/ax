<template>
  <div class="system py-8">
    <a-card title="开发者设置">
      <a-flex :justify="'space-between'" :align="'center'">
        <div>服务器地址</div>
        <a-auto-complete
          :options="baseUrlOptions"
          style="width: 200px"
          v-model:value="developer.baseURL"
          @change="setBaseurl"
        ></a-auto-complete>
      </a-flex>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import { logout } from '@/api/modules/system/user/user';
import useDeveloperStore from '@/store/developer/index';
import { Modal } from 'ant-design-vue';
import type { SelectValue } from 'ant-design-vue/es/select';
import axios from 'axios';

const developer = useDeveloperStore();
const baseUrlOptions = [
  {
    label: '测试',
    value: 'http://150.158.14.110:8081/',
  },
  {
    label: '若依官网',
    value: 'http://vue.ruoyi.vip/prod-api/',
  },
];

const setBaseurl = (url: SelectValue) => {
  Modal.confirm({
    title: 'Server switched',
    content: 'Whether to refresh the page immediately',
    onOk() {
      window.location.reload();
      logout();
    },
  });
  axios.defaults.baseURL = `${url}`;
};
</script>

<style lang="scss" scoped>
.system {
  width: 100%;
  background: white;
  height: 100%;
}
</style>
