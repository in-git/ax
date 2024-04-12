<template>
  <div class="table-card flex-1 flex flex-col">
    <ul class="table-card-list flex-1" ref="cardRef">
      <li
        v-for="(item, key) in systemWebsiteCardData"
        :key="key"
        size="small"
        @click="selectSystemWebsite(item)"
        :class="{ active: websiteKeys.includes(item.id) }"
        @dblclick="websiteEdit(item.id)"
        :draggable="true"
        @dragstart="dragstart(item)"
        @drop="drop(item)"
        @dragover="e => e.preventDefault()"
      >
        <a-card>
          <div class="index">{{ key + 1 }}</div>

          <a-card-meta title="Europe Street beat" class="mb-8">
            <template #description>www.wind.com</template>
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
  </div>
</template>

<script setup lang="ts">
import { useSortable } from '@vueuse/integrations/useSortable';
import { dragstart, drop, selectSystemWebsite, systemWebsiteCardData } from '../../data/card';
import { websiteEdit } from '../../data/curd';
import { websiteKeys } from '../../data/table';

const cardRef = ref();

interface SortConfig {
  oldIndex: number;
  newIndex: number;
}

nextTick(() => {
  useSortable(cardRef, systemWebsiteCardData.value, {
    animation: 200,
    onUpdate(e: SortConfig) {
      console.log(e.oldIndex, e.newIndex);
    },
  });
});
</script>

<style lang="scss" scoped>
$width: 200px;
.table-card-list {
  display: flex;
  padding: 12px;
  flex-wrap: wrap;
  gap: 8px;
  overflow-y: auto;
  height: 100%;
  place-content: start;
  li {
    height: fit-content;
    flex: 1;
    width: $width;
    max-width: $width;
  }
}
:deep(td.ant-descriptions-item) {
  padding-bottom: 0;
  white-space: nowrap;
  overflow: hidden;
  max-width: $width - 80px;
  text-overflow: ellipsis;
}
div.index {
  $wh: 24px;
  width: $wh;
  height: $wh;
  border-radius: 50%;
  line-height: $wh;
  border: 1px solid var(--primary);
  color: var(--primary);
  text-align: center;
  position: absolute;
  background: white;
  right: -10px;
  top: -10px;
  z-index: 10;
}
li.active {
  div.index {
    border: 1px solid #ddd;
    background: var(--primary);
    color: white;
  }
}
</style>
