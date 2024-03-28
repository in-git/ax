import { message, Modal, type TableColumnProps } from 'ant-design-vue';

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
export const formatColumns = (data: TableColumnProps[]) => {
  let operation: TableColumnProps = {
    title: '操作',
    dataIndex: 'operation',
    key: 'operation',
    fixed: 'right',
  };
  if (data.findIndex(e => e.key === operation.key) <= -1) {
    data.push(operation);
  }

  return data.map(e => {
    e.align = 'center';
    e.ellipsis = true;
    return e;
  });
};
