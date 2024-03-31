<template>
  <div class="system-card">
    <ul></ul>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  data: any[];
}>();
</script>

<style lang="scss" scoped>
.system-card {
  display: grid;
}
</style>
