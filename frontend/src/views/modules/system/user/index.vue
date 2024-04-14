<template>
  <a-card class="system__module" :body-style="{ height: '100%' }">
    <a-flex class="h-100">
      <Dept />
      <UserTable />
      <UserForm></UserForm>
    </a-flex>
  </a-card>
</template>

<script setup lang="ts">
import Dept from './dept/Dept.vue';
import UserForm from './form/UserForm.vue';
import UserTable from './table/UserTable.vue';
</script>

<style lang="scss" scoped></style>
