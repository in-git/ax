<template>
  <div>
    <a-popover trigger="click" title="字段筛选" placement="bottomRight">
      <a-tooltip title="字段筛选">
        <a-button type="link">
          <FilterOutlined />
        </a-button>
      </a-tooltip>
      <template #content>
        <div class="pop-content">
          <ul class="w-100">
            <li v-for="item in computedColumns">
              <div>
                {{ item.title }}
              </div>
              <div>
                <a-checkbox v-model:checked="item.show" @change="onChange"></a-checkbox>
              </div>
            </li>
          </ul>
          <div class="divider text-right">
            <a-tooltip title="更新本地数据">
              <a-button type="link" @click="reset">
                同步
                <template #icon>
                  <ReloadOutlined />
                </template>
              </a-button>
            </a-tooltip>
          </div>
        </div>
      </template>
    </a-popover>
  </div>
</template>

<script setup lang="ts">
import useColumnsStore from '@/store/columns/index';
import type { ColumnProps } from '@/types/system';
import { message } from 'ant-design-vue';

const emit = defineEmits(['update:columns']);
const cols = ref();

const store = useColumnsStore();
const props = defineProps<{
  columns: ColumnProps[];
  /* 模块名，必须，用于区分本地存储的列 */
  moduleName: string;
}>();
const onChange = () => {
  emit('update:columns', cols.value);
};

const reset = () => {
  cols.value = [];
  store.$state = store.$state.filter(e => {
    if (e.moduleName === props.moduleName) {
      e.columns = props.columns as any;
      cols.value = props.columns;
      emit('update:columns', cols.value);
    }
    return e;
  });
  message.success('已更新');
};

const computedColumns = computed(() => {
  const colArr = props.columns.map(e => {
    if (typeof e.show === 'undefined') {
      e.show = true;
    }
    return e;
  });

  const target = store.$state.find(e => {
    if (e.moduleName === props.moduleName) {
      return e;
    }
    return null;
  });
  if (!target) {
    store.$state.push({
      moduleName: props.moduleName,
      columns: colArr as any,
    });
  } else {
    cols.value = target.columns;
  }

  return cols.value;
});
</script>

<style lang="scss" scoped>
.pop-content {
  width: 100%;
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
.divider {
  border-top: 1px solid #ddd;
  padding-top: 8px;
  margin-top: 8px;
}
</style>
