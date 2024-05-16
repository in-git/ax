<template>
    <a-card class="ax_plain_card" :bordered="false" :body-style="{ padding: '0' }">
    <ul class="table_card_list" ref="cardRef">
      <li
        v-for="(item, key) in menuCardData"
        :key="key"
        size="small"
        @click="selectSystemMenu(item)"
        :class="{ active: menuKeys.includes(item.id) }"
        @dblclick="menuEdit(item.id)"
        :draggable="true"
        @dragstart="dragstart(item)"
        @drop="drop(item)"
        @dragover="e => e.preventDefault()"
      >
        <a-card>
          <div class="active" v-if="menuKeys.includes(item.id)">
              <check-outlined class="text-12" />
          </div>
          <div :draggable="true" class="mb-8 cursor-move">
              <a-card-meta :draggable="true" :title="item.items[0].value"></a-card-meta>
          </div>
           <a-descriptions
              :column="1"
              layout="horizontal"
              :labelStyle="{ width: '80px', color: '#666', whiteSpace: 'nowrap' }"
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
import { dragstart, drop, selectSystemMenu, menuCardData } from '../../data/card';
import { menuEdit } from '../../data/curd';
import { menuKeys } from '../../data/table';

const cardRef = ref();

interface SortConfig {
  oldIndex: number;
  newIndex: number;
}

nextTick(() => {
  useSortable(cardRef, menuCardData.value, {
    animation: 200,
    handle: '.cursor-move',
    onUpdate(e: SortConfig) {
   // 拖拽结束触发
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