<template>
  <a-form :model="__Form">
    <SystemModal title="Untitled" v-model:visible="__ShowForm">
      <div class="h-100 flex flex-col">
        <div class="flex-1 p-8">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque excepturi nesciunt
          cupiditate vero fugit exercitationem eius voluptas a, expedita placeat nobis quas labore
          libero, provident officiis ratione sint quaerat laboriosam?
        </div>
        <FormFooter></FormFooter>
      </div>
    </SystemModal>
  </a-form>
</template>

<script setup lang="ts">
import SystemModal from '@/components/modal/SysModal.vue';
import { __Form, __ShowForm } from '../data/form';
</script>

<style lang="scss" scoped></style>
