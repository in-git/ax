<template>
  <div v-if="userProfile">
    <a-form-item label="用户头像">
      <div @click="visible = true">
        <a-avatar :src="getStaticHost(`avatar/${userProfile.avatar}`)" alt="avatar" :size="84" />
      </div>
    </a-form-item>

    <a-modal
      :footer="false"
      get-container="#user-center"
      centered
      v-model:open="visible"
      title="选择头像"
      :body-style="{ padding: '0' }"
    >
      <Gallery type="avatar" @update:value="uploadFile" v-model:value="userProfile.avatar" />
    </a-modal>
  </div>
</template>

<script setup lang="ts">
import { getStaticHost } from '@/store/system/utils';
import useUserStore from '@/store/user';
import Gallery from '@/views/selector/gallery/Gallery.vue';
import { getProfile, userProfile } from '../profile/data';

const visible = ref(false);
const loading = ref(false);
const fileList = ref([]);
const userStore = useUserStore();
const uploadFile = () => {
  visible.value = false;
};
const refresh = () => {
  getProfile();
};

// + `system/user/profile/avatar`
const headers = {
  Authorization: `Bearer ${userStore.$state.token}`,
};
</script>

<style lang="scss" scoped></style>
