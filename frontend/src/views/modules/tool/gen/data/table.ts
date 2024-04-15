import type { IQuery, TableConfig } from '@/api/config/types';
import { synchDb } from '@/api/modules/tool/gen/gen';
import { response } from '@/utils/table/table';
import { DeleteOutlined, ReloadOutlined } from '@ant-design/icons-vue';
import type { ItemType } from 'ant-design-vue';
import { codeDelete } from './curd';
import { currentCode } from './form';

export const codeTable = ref<TableConfig>({
  rowKey: 'tableName',
  data: [],
  loading: false,
  moduleName: 'code',
});

interface codeQuery {}

export const codeQuery = ref<IQuery<codeQuery>>({
  pageNum: 1,
  pageSize: 10,
  total: 0,
  orderByColumn: 'create_time',
  isAsc: 'desc',
});
export const codeKeys = ref<number[]>([]);

export const codeOperationList: ItemType[] = [
  {
    label: '同步',
    key: 'edit',
    icon: h(ReloadOutlined),
    onClick() {
      if (currentCode.value) {
        response(synchDb, currentCode.value.tableName);
      }
    },
  },
  {
    label: '删除',
    key: 'delete',
    icon: h(DeleteOutlined),
    onClick() {
      codeDelete();
    },
  },
];
