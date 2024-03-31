<template>
  <div>
    <a-popover trigger="click" title="字段筛选" placement="bottomLeft">
      <a-tooltip title="字段筛选">
        <div class="system-icon">
          <AppstoreAddOutlined />
        </div>
      </a-tooltip>
      <template #content>
        <div class="pop-content">
          <ul class="w-100">
            <li v-for="item in cols">
              <div>
                {{ item.title }}
              </div>
              <div>
                <a-checkbox
                  v-model:checked="item.show"
                  @change="emit('update:columns', cols)"
                ></a-checkbox>
              </div>
            </li>
          </ul>
        </div>
      </template>
    </a-popover>
  </div>
</template>

<script setup lang="ts">
import type { ColumnProps } from '@/types/system';
import { AppstoreAddOutlined } from '@ant-design/icons-vue';

const emit = defineEmits(['update:columns']);
const cols = ref<any[]>([]);

const props = defineProps<{
  columns: ColumnProps[];
}>();

watch(
  props.columns,
  () => {
    cols.value = props.columns;
  },
  {
    immediate: true,
  },
);
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
