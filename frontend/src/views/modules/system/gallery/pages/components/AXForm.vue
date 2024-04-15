<template>
  <a-form
    :rules="galleryRules"
    :model="galleryForm"
    @finish="submit"
    :wrapper-col="{ span: 8, offset: 1 }"
    :label-col="{ span: 4, offset: 4 }"
  >
    <SystemModal title="系统图库" v-model:visible="galleryShowForm">
      <a-card title="编辑/新增">
        <a-form-item label="图片URL" name="imageUrl">
          <a-upload-dragger
            @change="fileChange"
            accept="image/*"
            :maxCount="1"
            :action="`${dev.$state.developer.baseURL}common/upload-oss`"
            :headers="{
              Authorization: `Bearer ${userStore.$state.token}`,
            }"
          >
            <p class="ant-upload-drag-icon">
              <inbox-outlined></inbox-outlined>
            </p>
            <p class="ant-upload-text">点击上传图片</p>
          </a-upload-dragger>
          <input type="text" hidden v-model="galleryForm.imageUrl" />
        </a-form-item>

        <a-form-item label="图片名" name="imageName">
          <a-input placeholder="请输入图片名" v-model:value="galleryForm.imageName"></a-input>
        </a-form-item>

        <a-form-item label="图片类型" name="type">
          <a-select
            placeholder="请输入图片类型"
            :options="galleryTypeOptions"
            v-model:value="galleryForm.type"
          ></a-select>
        </a-form-item>

        <template #extra>
          <a-button htmlType="submit" type="primary" :loading="loading" block>保存</a-button>
        </template>
      </a-card>
    </SystemModal>
  </a-form>
</template>

<script setup lang="ts">
import { createGallery, updateGallery } from '@/api/modules/system/gallery/gallery';
import SystemModal from '@/components/modal/SysModal.vue';
import useSystemStore from '@/store/system';
import useUserStore from '@/store/user';
import { response } from '@/utils/table/table';
import type { UploadChangeParam } from 'ant-design-vue/es/upload/interface';
import { galleryList } from '../../data/curd';
import { galleryForm, galleryRules, galleryShowForm } from '../../data/form';
import { galleryTypeOptions } from '../../data/options';

const dev = useSystemStore();
const userStore = useUserStore();

const fileChange = (info: UploadChangeParam) => {
  console.log(info.file);
  if (info.file.response) {
    galleryForm.value.imageUrl = info.file.response.url;
    galleryForm.value.imageName = info.file.response.originalFilename;
  }
};
const loading = ref(false);

const submit = async () => {
  loading.value = true;
  if (galleryForm.value.galleryId) {
    await response(updateGallery, galleryForm.value);
  } else {
    await response(createGallery, galleryForm.value);
  }
  await galleryList();
  loading.value = false;
  galleryShowForm.value = false;
};
</script>

<style lang="scss" scoped></style>
