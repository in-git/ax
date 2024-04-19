<template>
  <a-card class="system__module card__container" :body-style="{ padding: '0', height: '100%' }">
    <a-flex class="h-100 flex-1">
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
