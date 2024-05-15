<template>
  <a-card class="system__module ax_plain_card">
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

<style lang="scss" scoped>
.ax_plain_card {
  overflow: hidden;
}
</style>
