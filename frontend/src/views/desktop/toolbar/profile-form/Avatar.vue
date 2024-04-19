<template>
  <div v-if="userProfile">
    <a-form-item label="用户头像">
      <div class="flex gc-12">
        <div v-if="userProfile.avatar" @click="visible = true">
          <a-avatar :src="getAvatar()" alt="avatar" :size="84" />
        </div>
        <a-upload
          v-else
          v-model:file-list="fileList"
          name="avatarfile"
          list-type="picture-card"
          class="avatar-uploader"
          :show-upload-list="false"
          :headers="headers"
          :action="`${getHost('system/user/profile/avatar')}`"
          @change="refresh"
          accept="image/*"
        >
          <div>
            <loading-outlined v-if="loading"></loading-outlined>
            <plus-outlined v-else></plus-outlined>
            <div>上传头像</div>
          </div>
        </a-upload>
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
      <Gallery type="avatar" v-model:value="userProfile.avatar" />
    </a-modal>
  </div>
</template>

<script setup lang="ts">
import useSystemStore from '@/store/system';
import { getHost } from '@/store/system/utils';
import useUserStore from '@/store/user';
import { getAvatar } from '@/store/user/utils';
import Gallery from '@/views/selector/gallery/Gallery.vue';
import { getProfile, userProfile } from '../profile/data';

const visible = ref(false);
const loading = ref(false);
const fileList = ref([]);
const userStore = useUserStore();
const page = useSystemStore();

const refresh = () => {
  getProfile();
};

// + `system/user/profile/avatar`
const headers = {
  Authorization: `Bearer ${userStore.$state.token}`,
};
</script>

<style lang="scss" scoped></style>
