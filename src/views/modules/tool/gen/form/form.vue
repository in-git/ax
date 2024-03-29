<template>
  <a-form :model="codeFormData">
    <SystemModal title="Untitled" v-model:visible="codeShowForm">
      <div class="h-100 flex flex-col">
        <div class="flex-1 p-8"></div>
      </div>
    </SystemModal>
  </a-form>
</template>

<script setup lang="ts">
import SystemModal from '@/components/modal/SysModal.vue';
import { codeFormData, codeShowForm } from '../data/form';
</script>

<style lang="scss" scoped></style>
