<template>
  <div class="system-module system-user flex">
    <Dept />
    <UserTable v-if="userMode === 'table'" />
    <UserForm v-else></UserForm>
  </div>
</template>

<script setup lang="ts">
import Dept from './dept/Dept.vue';
import { userMode } from './form/data';
import UserForm from './form/UserForm.vue';
import UserTable from './table/UserTable.vue';
</script>

<style lang="scss" scoped></style>
