import type { ColumnProps } from '@/types/system';
import { message, Modal } from 'ant-design-vue';

export const confirm = (onOk: any) => {
  Modal.confirm({
    title: 'Warning',
    content: '该操作可能影响系统运行',
    onOk,
    centered: true,
  });
};

export const response = async (request: (...arg: any) => any, ...arg: any) => {
  const { data } = await request(...arg);

  if (!data) {
    return;
  }
  if (data.code === 200) {
    message.success(data.msg);
  } else {
    message.warning(data.msg);
  }
};

export const formatColumns = (data: ColumnProps[]) => {
  let operation: ColumnProps = {
    title: '操作',
    dataIndex: 'operation',
    key: 'operation',
    fixed: 'right',
    show: true,
  };
  if (data.findIndex(e => e.dataIndex === operation.key) <= -1) {
    data.push(operation);
  }

  return data.filter(e => {
    if (!e.show) return;
    e.align = 'center';
    e.ellipsis = true;
    e.key = `${e.dataIndex}`;
    return e;
  });
};
