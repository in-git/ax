<template>
  <div class="gpt-home">
    <div class="core flex relative h-100">
      <div>
        <SidebarHead />
        <SidebarVue />
      </div>
      <Content />
    </div>
  </div>
</template>

<script setup lang="ts">
import Content from './content/Content.vue';
import { msg } from './content/input/data';
import SidebarVue from './sidebar/Sidebar.vue';
import SidebarHead from './sidebar/SidebarHead.vue';

const props = defineProps<{
  data?: string;
}>();

watch(
  props,
  () => {
    if (props.data) {
      msg.value = props.data;
    }
  },
  {
    deep: true,
    immediate: true,
  },
);
</script>
<style scoped lang="scss">
.gpt-home {
  width: 100%;
  height: 100%;

  .core {
    transition: var(--transition);
    background: #fff;
  }
}
</style>
