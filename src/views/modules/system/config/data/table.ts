import type { IQuery, TableConfig } from '@/api/config/types';
import { fetchConfigList } from '@/api/modules/system/config/config';
import { DeleteOutlined } from '@ant-design/icons-vue';
import type { ItemType } from 'ant-design-vue';

interface SystemConfigQuery {
  configName: string;
  configType: 'N' | 'Y';
}

export const configTable = ref<TableConfig>({
  rowKey: 'configId',
  data: [],
  loading: false,
  list: fetchConfigList,
});

export const configQuery = ref<IQuery<SystemConfigQuery>>({
  pageNum: 1,
  pageSize: 10,
  total: 0,
  configName: '',
  configType: 'Y',
});
export const configKeys = ref<number[]>([]);

export const configMenus: ItemType[] = [
  {
    label: '删除',
    key: 'delete',
    icon: h(DeleteOutlined),
  },
];
