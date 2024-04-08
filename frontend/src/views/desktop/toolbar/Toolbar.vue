<template>
  <div class="top-toolbar system-head px-12" :style="style">
    <div>
      <div class="flex align-center gc-4">
        <img :src="logo" width="28" style="object-fit: contain" />
        Win
      </div>
    </div>
    <div class="flex gc-4">
      <div class="system-icon-dark" @click="setting">
        <SettingOutlined />
      </div>
      <div class="system-icon-dark">
        <InfoCircleOutlined />
      </div>
      <Profile />
    </div>
  </div>
</template>

<script setup lang="ts">
import logo from '@/assets/logo.png';
import settingPng from '@/assets/system/system_setting.png';
import { openWindow } from '@/global/config/window';
import usePageStore from '@/store/page';
import PageSetting from '@/views/page/setting/PageSetting.vue';
import { InfoCircleOutlined, SettingOutlined } from '@ant-design/icons-vue';
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
  };
});
</script>

<style lang="scss" scoped>
.top-toolbar {
  border-bottom: 1px solid #ddd;
  position: relative;
  color: white;
  z-index: 10;
  .power-off {
    color: #fa2727da;
  }
}
</style>
