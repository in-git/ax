<template>
  <div class="menu-table">
    <MenuHead></MenuHead>
    <SystemTable
      :table="menuTableConfig"
      :columns="menuColumns"
      v-model:query="menuQuery"
      v-model:form="menuForm"
      v-model:selected-keys="menuKeys"
    >
      <template v-slot="{ value }">
        <template v-if="value.column.dataIndex === 'operation'">
          <Operation @edit="editMenu(value.record as any)" :items="menuItems" />
        </template>
        <template v-if="value.column.dataIndex === 'isFrame'">
          <CheckOutlined v-if="value.record.isFrame === '0'" class="text-green" />
          <CloseOutlined v-else class="text-red" />
        </template>
        <template v-else-if="value.column.dataIndex === 'menuType'">
          <a-tag>{{ getLabel(menuTypeOptions, value.record.menuType) }}</a-tag>
        </template>
      </template>
    </SystemTable>
  </div>
</template>

<script setup lang="ts">
import { getLabel } from '@/utils/common/utils';
import Operation from '@/views/components/table/Operation.vue';
import SystemTable from '@/views/components/table/SystemTable.vue';
import { CheckOutlined } from '@ant-design/icons-vue';
import { menuColumns } from '../data/column';
import { editMenu, loadMenuData } from '../data/curd';
import { menuItems, menuKeys, menuQuery, menuTableConfig } from '../data/data';
import { menuForm } from '../data/form';
import { menuTypeOptions } from '../data/options';
import MenuHead from './head/MenuHead.vue';

onMounted(() => {
  loadMenuData();
});
</script>

<style lang="scss" scoped>
.text-red {
  color: #ff7676;
}
.menu-table {
  height: calc(100%);
  overflow-y: auto;
}
</style>
