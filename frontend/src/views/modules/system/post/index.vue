<template>
  <a-card class="system__module">
    <PostTable></PostTable>
    <PostForm />
  </a-card>
</template>

<script setup lang="ts">
import PostForm from './form/PostForm.vue';
import PostTable from './table/PostTable.vue';
</script>
