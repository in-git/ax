<template>
  <div>
    <a-popover trigger="click" placement="bottomRight" v-model:open="popoverVisible">
      <div class="system-icon px-12">
        <span class="text-12">User center</span>
        <DownOutlined class="text-12 ml-8" />
      </div>
      <template #content>
        <div class="profile">
          <a-card :loading="loading" :bordered="false" :body-style="{ padding: '0' }">
            <div v-if="!!userProfile">
              <div class="flex align-center gc-12">
                <a-avatar :imageSrc="userProfile.avatar"></a-avatar>
                {{ userProfile.userName }}
              </div>
              <a-divider class="my-12"></a-divider>
              <a-descriptions :column="1" size="small">
                <a-descriptions-item label="Nickname">
                  {{ userProfile.nickName }}
                </a-descriptions-item>
                <a-descriptions-item label="Email">
                  {{ userProfile.email }}
                </a-descriptions-item>
                <a-descriptions-item label="Gender">{{ userProfile.sex }}</a-descriptions-item>
                <a-descriptions-item label="Role">{{ userData.roleGroup }}</a-descriptions-item>
                <a-descriptions-item label="Department">
                  {{ userData.postGroup }}
                </a-descriptions-item>
              </a-descriptions>
              <a-divider class="my-12"></a-divider>
              <a-button block @click="editProfile" class="mb-12">User center</a-button>

              <a-button type="primary" danger block @click="logOff">Logout</a-button>
            </div>
          </a-card>
        </div>
      </template>
    </a-popover>
  </div>
</template>

<script setup lang="ts">
import { logout, profile } from '@/api/modules/system/user/user';
import { openWindow } from '@/global/config/window';
import useUserStore from '@/store/user';
import { Modal } from 'ant-design-vue';
import ProFileForm from '../profile-form/ProfileForm.vue';
import { userProfile } from './data';

const popoverVisible = ref(false);
const userData = ref();
const loading = ref(false);

const getProfile = async () => {
  loading.value = true;
  const { data } = await profile();
  userProfile.value = data.data;
  userData.value = data;
  loading.value = false;
};

onMounted(() => {
  getProfile();
});

const editProfile = () => {
  openWindow({
    title: 'User center',
    component: markRaw(ProFileForm),
    id: 'user-center',
  });
};

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
    content: 'Will be out',
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
