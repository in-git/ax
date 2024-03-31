import type { ColumnProps } from '@/types/system';

const noticeColumns = ref<ColumnProps[]>([
  {
    title: '创建者',
    dataIndex: 'createBy',
    show: true,
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    show: true,
  },
  {
    title: '更新者',
    dataIndex: 'updateBy',
    show: true,
  },
  {
    title: '备注',
    dataIndex: 'remark',
    show: true,
  },
  {
    title: '通知标题',
    dataIndex: 'noticeTitle',
    show: true,
  },
  {
    title: '通知类型',
    dataIndex: 'noticeType',
    show: true,
  },
  {
    title: '通知内容',
    dataIndex: 'noticeContent',
    show: true,
  },
  {
    title: '状态',
    dataIndex: 'status',
    show: true,
  },
]);

export { noticeColumns };
