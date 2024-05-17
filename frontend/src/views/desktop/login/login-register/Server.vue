<template>
  <div>
    <a-select
      v-model:value="store.$state.developer.baseURL"
      :options="store.$state.developer.urlSelection"
      @change="onChange"
      style="width: 120px"
    ></a-select>
  </div>
</template>

<script setup lang="ts">
import useSystemStore from '@/store/system';

const store = useSystemStore();
const onChange = () => {
  window.location.reload();
};
</script>

<style lang="scss" scoped></style>
