<template>
  <div class="login-head">
    <TableHead title="登陆日志">
      <div class="flex">
        <div class="flex gc-4">
          <a-input placeholder="Please enter ip"></a-input>
          <a-input placeholder="Please enter username"></a-input>
          <a-button type="primary">Search</a-button>
        </div>
      </div>
    </TableHead>
  </div>
</template>

<script setup lang="ts">
import TableHead from '@/components/table/table-head/TableHead.vue';
</script>

<style lang="scss" scoped></style>
