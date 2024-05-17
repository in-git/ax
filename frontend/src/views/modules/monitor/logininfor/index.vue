<template>
  <a-card class="system__module" :body-style="bodyStyle">
    <a-flex vertical class="h-100">
      <LoginHead />
      <LoginInfoCard />
    </a-flex>
  </a-card>
</template>

<script setup>
import { bodyStyle } from '@/global/config/gen';
import LoginInfoCard from './card/LoginInfoCard.vue';
import LoginHead from './head/LoginHead.vue';
</script>

<style lang="scss" scoped></style>
