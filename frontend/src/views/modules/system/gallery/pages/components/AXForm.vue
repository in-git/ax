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
          <SelectPicture />
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
import { response } from '@/utils/table/table';
import { galleryList } from '../../data/curd';
import { galleryForm, galleryRules, galleryShowForm } from '../../data/form';
import { galleryTypeOptions } from '../../data/options';
import SelectPicture from './select-picture/SelectPicture.vue';

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

<style lang="scss" scoped>
.image-preview {
  height: 150px;
}
</style>
