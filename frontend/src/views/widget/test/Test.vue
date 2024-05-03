<template>
  <a-card class="system__module">
    <a-button @click="test">测试壁纸读取</a-button>
    计数：{{ count }}
  </a-card>
</template>

<script setup lang="ts">
const count = ref(0);
const test = async () => {
  count.value++;
};
</script>

<style lang="scss" scoped></style>
