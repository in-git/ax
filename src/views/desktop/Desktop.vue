<template>
  <div class="flex flex-col desktop">
    <Toolbar />
    <Apps />
    <Missions />
  </div>
</template>

<script setup lang="ts">
import Apps from './apps/Apps.vue';
import Missions from './missions/Missions.vue';
import Toolbar from './toolbar/Toolbar.vue';
</script>

<style lang="scss" scoped>
.desktop {
  position: relative;
  height: 100vh;
}
</style>
