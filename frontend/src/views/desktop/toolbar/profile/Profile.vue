<template>
  <div>
    <a-popover trigger="click" placement="bottomRight" v-model:open="popoverVisible">
      <div class="system-icon px-12">
        <span>用户中心</span>
        <DownOutlined class="text-12 ml-8" />
      </div>
      <template #content>
        <div class="profile">
          <a-card :loading="loading" :bordered="false" :body-style="{ padding: '0' }">
            <div v-if="!!userProfile">
              <div class="flex align-center gc-12" @click="selectPhoto">
                <a-avatar :imageSrc="userProfile.avatar"></a-avatar>
                {{ userProfile.userName }}
              </div>
              <a-divider class="my-12"></a-divider>
              <a-descriptions :column="1" size="small">
                <a-descriptions-item label="用户昵称">
                  {{ userProfile.nickName }}
                </a-descriptions-item>
                <a-descriptions-item label="用户邮箱">
                  {{ userProfile.email }}
                </a-descriptions-item>
                <a-descriptions-item label="用户性别">{{ userProfile.sex }}</a-descriptions-item>
                <a-descriptions-item label="用户角色">{{ userData.roleGroup }}</a-descriptions-item>
                <a-descriptions-item label="用户部门">
                  {{ userData.postGroup }}
                </a-descriptions-item>
              </a-descriptions>
              <a-divider class="my-12"></a-divider>
              <a-button block @click="editProfile" class="mb-12">编辑信息</a-button>

              <a-button type="primary" danger block @click="logout">退出登录</a-button>
            </div>
          </a-card>
        </div>
      </template>
    </a-popover>
    <Gallery v-model:visible="visible" />
  </div>
</template>

<script setup lang="ts">
import { profile } from '@/api/modules/system/user/user';
import { logoff } from '@/api/utils/auth';
import userCenterPng from '@/assets/system/user-center.png';
import { openWindow } from '@/global/config/window';
import Gallery from '@/views/components/gallery/Gallery.vue';
import { Modal } from 'ant-design-vue';
import ProFileForm from '../profile-form/ProfileForm.vue';
import { userProfile } from './data';

const visible = ref(false);
const selectPhoto = () => {
  visible.value = true;
};

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
    title: '用户中心',
    component: markRaw(ProFileForm),
    id: 'user-center',
    icon: userCenterPng,
  });
};

const logout = async () => {
  popoverVisible.value = false;
  Modal.confirm({
    title: '警告',
    async onOk() {
      logoff();
    },
    centered: true,
    content: '将会退出登录',
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
