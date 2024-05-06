<template>
  <a-card class="system__module" :body-style="{ height: '100%', padding: '0' }">
    <LoginHead />
    <LoginInfoCard />
  </a-card>
</template>

<script setup>
import LoginInfoCard from './card/LoginInfoCard.vue';
import LoginHead from './head/LoginHead.vue';
</script>

<style lang="scss" scoped></style>
