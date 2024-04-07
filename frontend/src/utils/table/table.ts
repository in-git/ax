import type { ColumnProps } from '@/types/system';
import { message, Modal } from 'ant-design-vue';

export const confirm = (onOk: any) => {
  Modal.confirm({
    title: '警告',
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
    if (typeof e.show === 'undefined') {
      e.show = true;
    }
    if (!e.show) return;
    e.align = 'center';
    e.ellipsis = true;
    e.key = `${e.dataIndex}`;
    return e;
  });
};
export const dictToOptions = (dict: SystemDictData[]) => {
  return dict.map(e => {
    return {
      label: e.dictLabel,
      value: e.dictValue,
    };
  });
};
