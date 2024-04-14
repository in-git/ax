import type { ColumnProps } from '@/types/system';
import { message } from 'ant-design-vue';

export const response = async (request: (...arg: any) => any, ...arg: any) => {
  try {
    const { data } = await request(...arg);
    if (!data) {
      return;
    }
    if (data.code === 200) {
      message.success(data.msg);
    } else {
      message.warning(data.msg);
    }
  } catch (error) {
    console.info(error);
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

/* 字典数据转下拉框数据 */
export const dictDataToOptions = (dict: SystemDictData[]) => {
  return dict.map(e => {
    return {
      label: e.dictLabel,
      value: e.dictValue,
    };
  });
};
/* 字典数据转下拉框数据 */
export const dictToOptions = (dict: SystemDict[]) => {
  return dict.map(e => {
    return {
      label: e.dictName,
      value: e.dictType,
    };
  });
};
