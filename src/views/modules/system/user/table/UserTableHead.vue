<template>
  <div>
    <TableHead title="User list">
      <div class="flex gc-2">
        <a-button type="primary">Create</a-button>
        <a-button @click="loadUserData">Reload</a-button>
        <a-segmented
          :options="setOptions('Disabled', 'Normal')"
          v-model:value="userQuery.status"
          @click="loadUserData"
        ></a-segmented>
      </div>

      <div class="mt-8 flex gc-8 text-999">
        <div>
          Username
          <a-input allow-clear style="width: 180px" v-model:value="userQuery.userName"></a-input>
        </div>
        <div>
          Phone
          <a-input allow-clear style="width: 180px" v-model:value="userQuery.phonenumber" />
        </div>
        <a-button type="primary" @click="loadUserData">Search</a-button>
      </div>
    </TableHead>
  </div>
</template>

<script setup lang="ts">
import TableHead from '@/components/table-head/TableHead.vue';
import { setOptions } from '@/global/options/system';
import { loadUserData, userQuery } from './data';
</script>

<style lang="scss" scoped></style>
