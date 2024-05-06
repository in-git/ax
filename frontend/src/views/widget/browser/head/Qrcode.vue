<template>
  <div>
    <a-popover title="当前链接二维码" trigger="click" placement="bottomRight">
      <div class="system__icon">
        <QrcodeOutlined />
      </div>
      <template #content>
        <a-qrcode :value="text" v-if="text" />
      </template>
    </a-popover>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  text: string;
}>();
</script>

<style lang="scss" scoped></style>
