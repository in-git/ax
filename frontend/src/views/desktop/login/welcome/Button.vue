<template>
  <div class="text-center">
    <a href="javascript:void(0)" class="button" @click="emit('onClick')">
      <span>使用必看</span>
    </a>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['onClick']);
</script>

<style lang="scss" scoped>
.button {
  background-image: var(--linear-gradient);
  position: relative;
  padding: 4px;
  display: inline-block;
  border-radius: 12px;
  span {
    display: inline-block;
    background: #191919;
    text-transform: uppercase;
    padding: 12px 18px;
    border-radius: 5px;
    font-size: 24px;
  }
}
</style>
