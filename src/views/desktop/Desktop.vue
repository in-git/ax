<template>
  <div class="flex flex-col desktop">
    <Toolbar />
    <!-- <Apps /> -->
    <Login />
    <Missions />
  </div>
</template>

<script setup lang="ts">
// import Apps from './apps/Apps.vue';
import Login from './login/Login.vue';
import Missions from './missions/Missions.vue';
import Toolbar from './toolbar/Toolbar.vue';
</script>

<style lang="scss" scoped>
.desktop {
  position: relative;
  height: 100vh;
  overflow: hidden;
}
</style>
