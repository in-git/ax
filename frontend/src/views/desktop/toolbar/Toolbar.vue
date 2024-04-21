<template>
  <div class="top-toolbar system__head px-12" :style="style">
    <a-flex :align="'center'" :gap="4">
      <img :src="logo" width="28" style="object-fit: contain" />
      AX
    </a-flex>
    <a-flex :gap="4">
      <div class="system__icon" @click="setting">
        <SettingOutlined />
      </div>
      <Profile />
    </a-flex>
  </div>
</template>

<script setup lang="ts">
import logo from '@/assets/logo.png';
import settingPng from '@/assets/system/system_setting.png';
import { openWindow } from '@/global/config/window';
import usePageStore from '@/store/page';
import PageSetting from '@/views/desktop/setting/PageSetting.vue';
import { SettingOutlined } from '@ant-design/icons-vue';
import type { CSSProperties } from 'vue';
import Profile from './profile/Profile.vue';

const setting = () => {
  openWindow({
    title: '系统设置',
    component: markRaw(PageSetting),
    id: 'system_setting',
    w: 800,
    h: 600,
    icon: settingPng,
  });
};
const store = usePageStore();
const style = computed((): CSSProperties => {
  return {
    background: `rgba(175, 175, 175, ${store.$state.desktop.topNavigationBar.opacity})`,
    'backdrop-filter': `blur(${store.$state.desktop.topNavigationBar.blur}px)`,
    borderBottomColor: `rgba(255,255,255,${store.$state.desktop.topNavigationBar.borderOpacity})`,
  };
});
</script>

<style lang="scss" scoped>
.top-toolbar {
  border-bottom: 1px solid white;
  position: relative;
  color: white;
  z-index: 10;
  .power-off {
    color: #fa2727da;
  }
}
</style>
