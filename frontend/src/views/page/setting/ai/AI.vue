<template>
  <div class="qf-container flex flex-col">
    <div class="banner">
      <div class="banner-text flex flex-s flex-col">
        <h3 class="text-36 text-bold text-center">千帆大模型</h3>
        <div class="text-12 text-center mt-24">
          Lorem ipsum dolor sit amet
          <a-button type="link" style="color: pink">立即获取</a-button>
        </div>
      </div>
    </div>
    <div class="flex-1 qf-form flex flex-s">
      <a-form layout="vertical">
        <a-form-item>
          <a-input size="large" placeholder="请输入AK"></a-input>
        </a-form-item>
        <a-form-item>
          <a-input size="large" placeholder="请输入SK"></a-input>
        </a-form-item>
        <a-form-item>
          <a-input size="large" placeholder="token" disabled>
            <template #suffix>
              <CopyOutlined />
            </template>
          </a-input>
        </a-form-item>

        <div class="flex flex-s">
          <div class="button-effect">
            <button class="learn-more">
              <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
              </span>
              <span class="button-text">立即开始</span>
            </button>
          </div>
        </div>
      </a-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import useAIStore from '@/store/AI/AI';
import type { CopyOutlined } from '@ant-design/icons-vue';

const AIStore = useAIStore();

const urlOptions = [];
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>
