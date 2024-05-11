import type { Response } from '@/api/config/types';
import type { DataNode } from 'ant-design-vue/es/tree';
import axios from 'axios';
/**
 * @param path 需要查询的路径，如果为空，则查询系统根目录
 * @param onlyFolder 仅查询文件夹
 *  */
export const getSystemPath = (path: string = '', onlyFolder: boolean = false) => {
  return axios.get<Response<DataNode[]>>(`system/file/path`, {
    params: {
      path,
      onlyFolder,
    },
  });
};
