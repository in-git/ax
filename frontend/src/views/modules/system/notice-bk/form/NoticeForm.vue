<template>
  <a-form size="middle" :wrapper-col="{ span: 24 }" :model="noticeForm" @finish="submit">
    <SystemModal v-model:visible="showNoticeForm" title="通知配置">
      <div class="notice-form p-8 h-100">
        <div class="border-bottom">
          <a-form-item>
            <div class="flex align-center justify-between">
              <div class="flex gc-12">
                <div class="flex-1">
                  <a-input
                    placeholder="请输入标题"
                    v-model:value="noticeForm.noticeTitle"
                    style="width: 400px"
                  ></a-input>
                </div>

                <a-radio-group v-model:value="noticeForm.status">
                  <a-radio-button v-for="item in statusOptions" :value="item.value">
                    {{ item.label }}
                  </a-radio-button>
                </a-radio-group>
                <a-radio-group v-model:value="noticeForm.noticeType">
                  <a-radio-button v-for="item in noticeTypeOptions" :value="item.value">
                    {{ item.label }}
                  </a-radio-button>
                </a-radio-group>
              </div>
              <div>
                <a-button type="primary" htmlType="submit">保存</a-button>
              </div>
            </div>
          </a-form-item>
        </div>

        <div>
          <quill-editor
            contentType="html"
            theme="snow"
            v-model:content="noticeForm.noticeContent"
            style="height: 430px"
          />
        </div>
      </div>
    </SystemModal>
  </a-form>
</template>

<script setup lang="ts">
import { createNotice, updateNotice } from '@/api/modules/system/notice/notice';
import SystemModal from '@/components/modal/SysModal.vue';
import { statusOptions } from '@/global/options/system';
import { response } from '@/utils/table/table';
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import { noticeList } from '../data/curd';
import { noticeForm, showNoticeForm } from '../data/form';
import { noticeTypeOptions } from '../data/options';

const submit = async () => {
  if (noticeForm.value.noticeId) {
    await response(updateNotice, noticeForm.value);
  } else {
    await response(createNotice, noticeForm.value);
  }
  await noticeList();
  showNoticeForm.value = false;
};
</script>

<style lang="scss" scoped>
.border-bottom {
  border-bottom: 1px solid #ddd;
}
</style>
