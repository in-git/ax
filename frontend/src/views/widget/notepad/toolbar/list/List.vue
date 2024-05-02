<template>
  <div>
    <a-popover @open-change="getNotepad" trigger="click" placement="bottomLeft" title="文件列表">
      <div class="menu-button">文件列表</div>
      <template #content>
        <a-card class="file-card">
          <template #title>
            <a-pagination
              :total="query.total"
              :current="query.pageNum"
              :page-size="query.pageSize"
              @change="onChange"
            />
          </template>
          <template #extra>
            <a-segmented
              :options="memoTypeOptions"
              @change="changeType"
              v-model:value="memoType"
            ></a-segmented>
          </template>
          <a-menu :selected-keys="[]">
            <a-menu-item v-for="(item, key) in notepadList" @click="selectNotepad(item)">
              <template #icon>
                <div class="icon flex flex-s">
                  {{ key }}
                </div>
              </template>
              {{ item.title }}
            </a-menu-item>
          </a-menu>
        </a-card>
      </template>
    </a-popover>
  </div>
</template>

<script setup lang="ts">
import type { IQuery } from '@/api/config/types';
import { fetchMemoList } from '@/api/modules/system/memo/memo';
import type { SystemMemo } from '@/api/modules/system/memo/types';
import { setData } from '@/global/config/window';
import { memoTypeOptions } from '@/views/modules/system/memo/data/options';

const notepadList = ref<SystemMemo[]>([]);
const notepadId = inject<string>('data')!;

const query = ref<IQuery>({
  pageNum: 1,
  pageSize: 10,
  total: 0,
  type: '2',
});

const memoType = ref('2');

const changeType = () => {
  query.value.type = memoType.value;
  getNotepad();
};

const getNotepad = async () => {
  const { data } = await fetchMemoList(query.value);
  notepadList.value = data.rows;
  query.value.total = data.total;
};

const onChange = (num: number, pageSize: number) => {
  query.value.pageNum = num;
  query.value.pageSize = pageSize;
  getNotepad();
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
  color: #999 !important;
}

.file-card {
  box-shadow: none !important;
  width: 300px;
  :deep(.ant-menu) {
    border: none;
  }
  :deep(.ant-card-body) {
    padding: 8px 0;
  }
  :deep(.ant-menu-item) {
    height: 28px;
    line-height: 28px;
  }
}
</style>
