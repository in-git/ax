import type { ColumnProps } from '@/types/system';
import { message } from 'ant-design-vue';
import { compareDateStrings } from '../common/utils';

/**
 * @description: 统一请求反馈,响应后端返回的消息
 * @param {function} request API请求
 * @param {array} arg 参数列表
 */
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

export const formatColumns = (data: ColumnProps[], operationSlot = true) => {
  let operation: ColumnProps = {
    title: '操作',
    dataIndex: 'operation',
    key: 'operation',
    fixed: 'right',
    show: true,
  };

  if (data.findIndex(e => e.dataIndex === operation.key) <= -1 && operationSlot) {
    data.push(operation);
  }

  return data.filter(e => {
    if (typeof e.show === 'undefined') {
      e.show = true;
    } else if (e.dataIndex === 'createTime' || e.dataIndex === 'updateTime') {
      /* 处理自带的两个时间字段排序 */
      e.sorter = {
        compare: (a: any, b: any) => compareDateStrings(a.createTime, b.createTime),
      };
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
