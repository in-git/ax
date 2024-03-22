<template>
  <div class="top-toolbar system-head px-12">
    <div>Win</div>
    <div class="flex gc-4">
      <div class="system-icon">
        <SettingOutlined />
      </div>
      <div class="system-icon">
        <InfoCircleOutlined />
      </div>
      <div class="system-icon power-off" @click="logOff">
        <PoweroffOutlined />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { logout } from '@/api/modules/user/user';
import useUserStore from '@/store/user';
import { InfoCircleOutlined, PoweroffOutlined, SettingOutlined } from '@ant-design/icons-vue';

const logOff = async () => {
  await logout();
  const store = useUserStore();
  store.$state.token = '';
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
