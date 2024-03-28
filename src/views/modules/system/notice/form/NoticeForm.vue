<template>
  <a-form :wrapper-col="{ span: 24 }" :model="noticeForm">
    <SystemModal v-model:visible="showNoticeForm" title="Notice config">
      <div class="notice-form p-8 h-100">
        <div class="border-bottom">
          <a-form-item>
            <div class="flex align-center justify-between">
              <div class="flex gc-12">
                <div class="flex-1">
                  <a-input placeholder="Please enter title"></a-input>
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
                <a-button type="primary">保存</a-button>
              </div>
            </div>
          </a-form-item>
        </div>

        <div></div>
      </div>
    </SystemModal>
  </a-form>
</template>

<script setup lang="ts">
import SystemModal from '@/components/modal/SysModal.vue';
import { statusOptions } from '@/global/options/system';
import { noticeForm, showNoticeForm } from '../data/form';
import { noticeTypeOptions } from '../data/options';
</script>

<style lang="scss" scoped>
.border-bottom {
  border-bottom: 1px solid #ddd;
}
</style>
