<template>
  <div class="advance">
    <div class="flex flex-col gr-4">
      <div class="grid gc-8">
        <a-card title="重设GPT">
          <ul class="text-orange">
            <li>清空所有与GPT相关的设置</li>
            <li>账号相关信息将会被清空</li>
            <li>需要重新填写 秘钥[令牌][key]</li>
          </ul>
          <a-divider class="my-8" />
          <a-button danger block type="primary" @click="resetConfig('config')">坚决执行</a-button>
        </a-card>
        <a-card title="重置预设">
          <ul class="text-999">
            <li>清空所有已添加分类</li>
            <li>清空所有自定义的预设</li>
            <li>系统内置预设恢复到初始状态</li>
          </ul>
          <a-divider class="my-8" />
          <a-button block @click="resetConfig('conversation')">坚决执行</a-button>
        </a-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Modal } from 'ant-design-vue';
const resetConfig = (key: string) => {
  Modal.confirm({
    title: '警告',
    content: '将会清空所有与GPT相关的设置,且刷新页面',
    centered: true,
    onOk() {
      localStorage.setItem(key, '');
      window.location.reload();
    },
  });
};
</script>

<style lang="scss" scoped>
.advance {
  .grid {
    grid-template-columns: 1fr 1fr;
  }
  ul,
  li {
    list-style: initial !important;
    margin-left: 20px;
  }
}
.text-orange {
  color: orange;
}
</style>
