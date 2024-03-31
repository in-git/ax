<template>
  <div>
    <a-popover trigger="click" title="字段筛选" placement="bottomRight">
      <a-tooltip title="字段筛选">
        <AppstoreAddOutlined />
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
        </div>
      </template>
    </a-popover>
  </div>
</template>

<script setup lang="ts">
import useColumnsStore from '@/store/columns/index';
import type { ColumnProps } from '@/types/system';
import { AppstoreAddOutlined } from '@ant-design/icons-vue';

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
</style>
