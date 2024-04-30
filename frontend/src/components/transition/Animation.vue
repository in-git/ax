<template>
  <Transition
    appear
    enter-active-class="animate__animated animate__fadeIn"
    leave-active-class="animate__animated animate__fadeOut"
  >
    <slot></slot>
  </Transition>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
