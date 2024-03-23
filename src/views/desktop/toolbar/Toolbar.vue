<template>
  <div class="top-toolbar system-head px-12">
    <div>
      <div class="flex align-center gc-4">
        <img :src="logo" width="28" style="object-fit: contain" />
        Win
      </div>
    </div>
    <div class="flex gc-4">
      <div class="system-icon" @click="setting">
        <SettingOutlined />
      </div>
      <div class="system-icon">
        <InfoCircleOutlined />
      </div>
      <Profile />
    </div>
  </div>
</template>

<script setup lang="ts">
import { profile } from '@/api/modules/system/user/user';
import logo from '@/assets/logo.png';
import { openWindow } from '@/global/config/window';
import PageSetting from '@/views/page/setting/PageSetting.vue';
import { InfoCircleOutlined, SettingOutlined } from '@ant-design/icons-vue';
import Profile from './profile/Profile.vue';

const getProfile = async () => {
  const { data } = await profile();
  console.log(data);
};

onMounted(() => {
  getProfile();
});
const setting = () => {
  openWindow({
    title: 'System setting',
    component: markRaw(PageSetting),

    id: 'system_setting',
  });
};
</script>

<style lang="scss" scoped>
.top-toolbar {
  background: #f8f8f8;
  border-bottom: 1px solid #ddd;
  .power-off {
    color: #fa2727da;
  }
}
</style>
