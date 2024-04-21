<template>
  <div>
    <a-popover trigger="click" placement="bottomRight" v-model:open="popoverVisible">
      <div class="system__icon px-12">
        <span class="text-12">用户中心</span>
        <DownOutlined class="text-12 ml-8" />
      </div>
      <template #content>
        <div class="profile">
          <a-card :loading="loading" :bordered="false" :body-style="{ padding: '0' }">
            <div v-if="!!userProfile">
              <div class="flex align-center gc-12">
                <a-avatar :src="getAvatar()"></a-avatar>
                {{ userProfile.userName }}
              </div>
              <a-divider class="my-12"></a-divider>
              <a-descriptions :column="1" size="small">
                <a-descriptions-item label="用户账号">
                  {{ userProfile.userName }}
                </a-descriptions-item>
                <a-descriptions-item label="用户昵称">
                  {{ userProfile.nickName }}
                </a-descriptions-item>
                <a-descriptions-item label="用户邮箱">
                  {{ userProfile.email }}
                </a-descriptions-item>
                <a-descriptions-item label="用户性别">
                  {{ getLabel(sexOptions, userProfile.sex) }}
                </a-descriptions-item>
                <a-descriptions-item label="用户角色">
                  <a-tag v-for="(item, key) in userData?.roles" :key="key">
                    {{ item.roleName }}
                  </a-tag>
                </a-descriptions-item>
                <a-descriptions-item label="用户部门">
                  {{ userData?.dept?.deptName }}
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
  </div>
</template>

<script setup lang="ts">
import type { UserProfileData } from '@/api/modules/system/user/types';
import { userLogout } from '@/api/modules/system/user/utils';
import userCenterPng from '@/assets/system/user-center.png';
import { openWindow } from '@/global/config/window';
import { sexOptions } from '@/global/options/system';
import { getAvatar } from '@/store/user/utils';
import { getLabel } from '@/utils/common/utils';
import { Modal } from 'ant-design-vue';
import ProFileForm from '../profile-form/ProfileForm.vue';
import { getProfile, userProfile } from './data';

const popoverVisible = ref(false);
const userData = ref<UserProfileData>();
const loading = ref(false);

onMounted(async () => {
  loading.value = true;
  userData.value = await getProfile();
  loading.value = false;
});

const editProfile = () => {
  openWindow({
    title: '用户中心',
    component: markRaw(ProFileForm),
    id: 'user-center',
    icon: userCenterPng,
  });
  popoverVisible.value = false;
};

const logout = async () => {
  popoverVisible.value = false;
  Modal.confirm({
    title: '警告',
    async onOk() {
      userLogout();
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
::v-deep(.ant-card-body) {
  box-shadow: none !important;
}
</style>
