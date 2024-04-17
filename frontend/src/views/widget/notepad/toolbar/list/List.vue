<template>
  <div>
    <a-dropdown @open-change="getNotepad" trigger="click">
      <div class="menu-button">文件列表</div>
      <template #overlay>
        <a-card class="card" :body-style="{ padding: '0', boxShadow: 'none' }" title="文件列表">
          <a-menu>
            <a-menu-item
              v-for="(item, key) in notepadList"
              @click="selectNotepad(item)"
              :key="item.memoId"
            >
              <template #icon>
                <div class="icon">
                  {{ key }}
                </div>
              </template>
              {{ item.title }}
            </a-menu-item>
            <a-menu-divider />
            <a-menu-item disabled>
              <div class="system-subtitle">
                <info-circle-filled />
                前往备忘录中进行编辑
              </div>
            </a-menu-item>
          </a-menu>
        </a-card>
      </template>
    </a-dropdown>
  </div>
</template>

<script setup lang="ts">
import { fetchMemoList } from '@/api/modules/system/memo/memo';
import type { SystemMemo } from '@/api/modules/system/memo/types';
import { setData } from '@/global/config/window';

const notepadList = ref<SystemMemo[]>([]);
const notepadId = inject<string>('data')!;

const getNotepad = async () => {
  if (notepadList.value.length === 0) {
    const { data } = await fetchMemoList({
      pageNum: 1,
      pageSize: 20,
      total: 0,
      type: '2',
    });
    notepadList.value = data.rows;
  }
};

const selectNotepad = (info: SystemMemo) => {
  setData(notepadId, info.value);
};
</script>

<style lang="scss" scoped>
@import '../common.scss';
.icon {
  width: 16px;
  height: 16px;
  border: 1px solid #999;
  text-align: center;
  line-height: 16px;
  border-radius: 4px;
  font-size: 12px;
}
.card {
  box-shadow: none !important;
  width: 200px;
}
</style>
