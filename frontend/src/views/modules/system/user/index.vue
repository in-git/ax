<template>
  <div class="system__module flex">
    <Dept />
    <UserTable />
    <UserForm></UserForm>
  </div>
</template>

<script setup lang="ts">
import Dept from './dept/Dept.vue';
import UserForm from './form/UserForm.vue';
import UserTable from './table/UserTable.vue';
</script>

<style lang="scss" scoped></style>
