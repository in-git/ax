<template>
    <a-card class="table__card" :bordered="false" :body-style="{ padding: '0' }">
    <ul class="table_card_list flex-1" ref="cardRef">
      <li
        v-for="(item, key) in configCardData"
        :key="key"
        size="small"
        @click="selectSystemConfig(item)"
        :class="{ active: configKeys.includes(item.id) }"
        @dblclick="configEdit(item.id)"
        :draggable="true"
        @dragstart="dragstart(item)"
        @drop="drop(item)"
        @dragover="e => e.preventDefault()"
      >
        <a-card>
          <div class="index">{{ key + 1 }}</div>

          <a-card-meta title="Europe Street beat" class="mb-8">
            <template #description>www.axxxxxxx.com</template>
          </a-card-meta>
          <a-descriptions
            :column="1"
            layout="horizontal"
            :labelStyle="{ width: '80px', color: '#666' }"
          >
            <a-descriptions-item
              :label="v.label"
              :contentStyle="{ fontWeight: k === 0 ? 'bold' : '' }"
              v-for="(v, k) in item.items"
            >
              {{ v.value }}
            </a-descriptions-item>
          </a-descriptions>
        </a-card>
      </li>
    </ul>
   </a-card>
</template>

<script setup lang="ts">
import { useSortable } from '@vueuse/integrations/useSortable';
import { dragstart, drop, selectSystemConfig, configCardData } from '../../data/card';
import { configEdit } from '../../data/curd';
import { configKeys } from '../../data/table';

const cardRef = ref();

interface SortConfig {
  oldIndex: number;
  newIndex: number;
}

nextTick(() => {
  useSortable(cardRef, configCardData.value, {
    animation: 200,
    onUpdate(e: SortConfig) {
      // console.log(e.oldIndex, e.newIndex);
    },
  });
});
</script>

<style lang="scss" scoped>
$width: 200px;
:deep(td.ant-descriptions-item) {
  padding-bottom: 0;
  white-space: nowrap;
  overflow: hidden;
  max-width: $width - 80px;
  text-overflow: ellipsis;
}
</style>