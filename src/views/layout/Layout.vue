<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <div class="logo"></div>
      <a-menu
        v-model:selectedKeys="selectedKeys"
        theme="dark"
        mode="inline"
        :items="menus"
      ></a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background-color: #fff" class="px-8">
        <a-flex justify="right" class="h-100" :align="'center'">
          <HeadVue></HeadVue>
        </a-flex>
      </a-layout-header>
      <a-layout-content>
        <RouterView />
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import { menuList } from '@/api/modules/auth/menu';
import type { ItemType } from 'ant-design-vue';
import { ref } from 'vue';
import HeadVue from './head/Head.vue';

const collapsed = ref<boolean>(false);
const selectedKeys = ref<string[]>(['1']);
const menus = ref<ItemType[]>([]);
const getMenus = async () => {
  const { data } = await menuList();
  if (data.data) {
    menus.value = data.data;
  }
};
onMounted(() => {
  getMenus();
});
</script>
<style scoped lang="scss">
.logo {
  background: #acabab;
  height: 60px;
}
</style>
