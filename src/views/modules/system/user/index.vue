<template>
  <div class="system-module system-user flex">
    <Dept />
    <UserTable />
  </div>
</template>

<script setup lang="ts">
import Dept from './dept/Dept.vue';
import UserTable from './table/UserTable.vue';
</script>

<style lang="scss" scoped></style>
