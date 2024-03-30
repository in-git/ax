<template>
  <div>
    <ul>
      <li v-for="(item, key) in data" :key="key">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  data: any[];
}>();
</script>

<style lang="scss" scoped></style>
