<template>
  <a-card class="table__card" :bordered="false" :body-style="{ padding: '0' }">
    <div v-if="memoCardData.length > 0">
      <ul class="table_card_list flex-1" ref="cardRef">
        <li
          v-for="(item, key) in memoCardData"
          :key="key"
          size="small"
          @click="selectSystemMemo(item)"
          :class="{ active: memoKeys.includes(item.id) }"
          @dblclick="memoEdit(item.id)"
          :draggable="true"
          @dragstart="dragstart(item)"
          @drop="drop(item)"
          @dragover="e => e.preventDefault()"
        >
          <a-card>
            <div class="active" v-if="memoKeys.includes(item.id)">{{ key + 1 }}</div>
            <a-card-meta :title="item.items[0].value" class="mb-8">
              <template #description>详细信息</template>
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
    <a-empty v-else description="广告位"></a-empty>
  </a-card>
</template>

<script setup lang="ts">
import { useSortable } from '@vueuse/integrations/useSortable';
import { dragstart, drop, memoCardData, selectSystemMemo } from '../../data/card';
import { memoEdit } from '../../data/curd';
import { memoKeys } from '../../data/table';

const cardRef = ref();

interface SortConfig {
  oldIndex: number;
  newIndex: number;
}

nextTick(() => {
  useSortable(cardRef, memoCardData.value, {
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
