import type { IQuery, TableConfig } from '@/api/config/types';
import { deleteNotice } from '@/api/modules/system/notice/notice';
import { response } from '@/utils/table/table';
import { DeleteOutlined } from '@ant-design/icons-vue';
import type { ItemType } from 'ant-design-vue';
import { noticeList } from './curd';
import { noticeForm } from './form';

export const noticeTable = ref<TableConfig>({
  rowKey: 'noticeId',
  data: [],
  loading: false,
  moduleName: 'notice',
});
export const noticeQuery = ref<IQuery>({
  pageNum: 1,
  pageSize: 10,
  total: 0,
});
export const noticeKeys = ref<number[]>([]);

export const operationList: ItemType[] = [
  {
    label: '删除',
    key: 'delete',
    icon: h(DeleteOutlined),
    async onClick() {
      await response(deleteNotice, noticeForm.value.noticeId);
      noticeList();
    },
  },
];
