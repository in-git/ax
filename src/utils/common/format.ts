import type { TableColumnProps } from 'ant-design-vue';

export function bytesToSize(bytes: number): string {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  if (bytes === 0) return '0 Byte';
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${(bytes / 1024 ** i).toFixed(2)} ${sizes[i]}`;
}
export const formatColumns = (data: TableColumnProps[]) => {
  let operation = {
    title: '操作',
    dataIndex: 'operational',
    key: 'operation',
  };
  if (data.findIndex(e => e.key === operation.key) <= -1) {
    data.push({
      title: '操作',
      dataIndex: 'operational',
      key: 'operation',
    });
  }
  return data.map(e => {
    e.align = 'center';
    e.ellipsis = true;
    return e;
  });
};
