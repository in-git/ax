<template>
  <a-card class="system__module card__container">
    <a-flex class="h-100">
      <Dept />
      <UserTable />
    </a-flex>
    <UserForm></UserForm>
  </a-card>
</template>

<script setup lang="ts">
import Dept from './dept/Dept.vue';
import UserForm from './form/UserForm.vue';
import UserTable from './table/UserTable.vue';
</script>

<style lang="scss" scoped></style>
