<template>
  <div>
    <a-popover trigger="click" placement="bottomRight" v-model:open="popoverVisible">
      <div class="system-icon px-12">
        <span class="text-12">Username</span>
        <DownOutlined class="text-12 ml-8" />
      </div>
      <template #content>
        <div class="profile">
          <a-card :loading="loading" :bordered="false" :body-style="{ padding: '0' }">
            <div class="flex align-center gc-12">
              <a-avatar></a-avatar>
              Username
            </div>
            <a-divider class="my-12"></a-divider>
            <a-descriptions :column="1" v-if="!!userProfile" size="small">
              <a-descriptions-item label="Nickname">
                {{ userProfile.data.nickName }}
              </a-descriptions-item>
              <a-descriptions-item label="Email">{{ userProfile.data.email }}</a-descriptions-item>
              <a-descriptions-item label="Gender">{{ userProfile.data.sex }}</a-descriptions-item>
              <a-descriptions-item label="Role">{{ userProfile.roleGroup }}</a-descriptions-item>
              <a-descriptions-item label="Department">
                {{ userProfile.postGroup }}
              </a-descriptions-item>
            </a-descriptions>
            <a-divider class="mb-12 mt-0"></a-divider>
            <a-button type="primary" danger block @click="logOff">Logout</a-button>
          </a-card>
        </div>
      </template>
    </a-popover>
  </div>
</template>

<script setup lang="ts">
import type { UserProfileRes } from '@/api/modules/system/user/types';
import { logout, profile } from '@/api/modules/system/user/user';
import useUserStore from '@/store/user';
import { Modal } from 'ant-design-vue';

const popoverVisible = ref(false);

const loading = ref(false);
const userProfile = ref<UserProfileRes>();

const getProfile = async () => {
  loading.value = true;
  const { data } = await profile();
  userProfile.value = data;
  loading.value = false;
};
onMounted(() => {
  getProfile();
});

const logOff = async () => {
  popoverVisible.value = false;
  Modal.confirm({
    title: 'warning',
    async onOk() {
      await logout();
      const store = useUserStore();
      store.$state.token = '';
    },
    centered: true,
    content: 'Will be out ',
  });
};
</script>

<style lang="scss" scoped>
.profile {
  width: 200px;
}
::v-deep(.ant-card) {
  box-shadow: none;
}
</style>
