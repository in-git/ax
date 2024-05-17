<template>
  <a-card>
    <a-flex :align="'center'" :justify="'space-between'">
      <a-flex>
        <FileVue />
        <List />
        <Tool />
        <slot></slot>
      </a-flex>
      <div>
        <div class="menu-button primary" v-if="allowSave" accesskey="s" @click="save">保存</div>
      </div>
    </a-flex>
  </a-card>
</template>

<script setup lang="ts">
import { EventBusEnum } from '@/global/enum/eventBus';
import { useEventBus } from '@vueuse/core';
import FileVue from './file/File.vue';
import List from './list/List.vue';
import Tool from './tool/Tool.vue';

const bus = useEventBus(EventBusEnum.UPDATE_NOTEPAD);
defineProps<{
  allowSave?: boolean;
}>();

const save = () => {
  bus.emit('save');
};
</script>

<style lang="scss">
@import './common.scss';
</style>
<style lang="scss" scoped>
.toolbar {
  justify-content: space-between;
  align-items: center;
}
:deep(.ant-card-body) {
  padding: 0;
}
.primary {
  color: white;
  line-height: 24px !important;
  height: 24px;
  background-color: var(--primary);
  border-radius: var(--radius);
  padding: 0 4px;
  margin-right: 4px;
}
</style>
