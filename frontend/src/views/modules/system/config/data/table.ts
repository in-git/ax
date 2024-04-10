import type { IQuery, TableConfig } from '@/api/config/types';
import { deleteConfigById } from '@/api/modules/system/config/config';
import { response } from '@/utils/table/table';
import { DeleteOutlined } from '@ant-design/icons-vue';
import type { ItemType } from 'ant-design-vue';
import { configList } from './curd';
import { configForm } from './form';

interface SystemConfigQuery {
  configName: string;
}

export const configTable = ref<TableConfig>({
  rowKey: 'configId',
  data: [],
  loading: false,
  moduleName: 'config',
});

export const configQuery = ref<IQuery<SystemConfigQuery>>({
  pageNum: 1,
  pageSize: 10,
  total: 0,
  configName: '',
});

export const configKeys = ref<number[]>([]);

export const configMenus: ItemType[] = [
  {
    label: '删除',
    key: 'delete',
    icon: h(DeleteOutlined),
    async onClick() {
      await response(deleteConfigById, configForm.value.configId);
      configList();
    },
  },
];
