<template>
  <div>
    <!-- 移动端不显示 -->
    <div class="phone">
      <a-flex class="flex-s h-100" :gap="24" vertical>
        <h2 class="text-linear-gradient">AX 后台管理系统</h2>
        <div class="system__subtitle">当前不支持小屏设备显示</div>
        <div class="system__subtitle">建议屏幕宽度尺寸大于 875px</div>
        <div>
          <a-button type="link" @click="copyLink">
            <template #icon>
              <LinkOutlined />
            </template>
            复制链接
          </a-button>
        </div>
      </a-flex>
    </div>
  </div>
</template>

<script setup lang="ts">
import { copyText } from '@/utils/common/utils';
import { message } from 'ant-design-vue';

const copyLink = () => {
  copyText(window.location.href);
  message.success('已复制');
};
</script>

<style lang="scss" scoped>
.phone {
  height: 100vh;
}
</style>
