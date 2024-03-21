<template>
  <a-flex :gap="4">
    <Icon @click="openSetting">
      <SettingOutlined />
    </Icon>
    <Icon class="cursor-pointer">
      <UserOutlined />
    </Icon>
  </a-flex>
</template>

<script setup lang="ts">
import Icon from '@/components/icon/Icon.vue';
import { openWindow } from '@/global/config/window';
import PageSetting from '@/views/page/setting/PageSetting.vue';
import { SettingOutlined, UserOutlined } from '@ant-design/icons-vue';

const openSetting = () => {
  openWindow({
    title: '系统设置',
    component: markRaw(PageSetting),
  });
};
</script>

<style lang="scss" scoped></style>
