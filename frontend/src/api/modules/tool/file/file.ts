import type { Response } from '@/api/config/types';
import useSystemStore from '@/store/system';
import { getToken } from '@/store/user/utils';
import type { DataNode } from 'ant-design-vue/es/tree';
import axios from 'axios';
import type { FileAttr } from './types';
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
/**
 * @description 根据路径浏览文件
 * @param path 需要查询的路径，不能为空，且一定是文件
 *  */
export const viewFile = async (path: string) => {
  const http = axios.create();

  const sysStore = useSystemStore();

  const host = sysStore.$state.developer.baseURL;

  const token = getToken();
  const response = await http({
    method: 'get',
    url: `${host}system/file/viewFile`,
    responseType: 'blob',
    params: {
      path,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

type FolderType = 'folder' | 'file';
/**
 * @description 创建文件或文件夹，文件夹也是特殊的文件
 */
export const createFile = (path: string, type: FolderType) => {
  return axios.get<Response<DataNode[]>>(`system/file/createFile`, {
    params: {
      path,
      type,
    },
  });
};

/**
 * @description: 根据路径删除一个文件夹
 * @param {string} path
 */
export const deleteFiles = (path: string[]) => {
  return axios.delete<Response>(`system/file/deleteFile`, {
    data: `${path.join(',')}`,
  });
};

export const renameFile = (oldFileName: string, newFileName: string) => {
  return axios.put<Response>(`system/file/renameFile`, {
    oldFileName,
    newFileName,
  });
};

/**
 * @description:
 * @param {string} targetPath 目标路径
 * @param {string} files 复制的文件
 */
export const clonedFiles = (targetPath: string, files: string[]) => {
  return axios.post<Response>(`system/file/cloneFile`, {
    targetPath,
    files: files.join(','),
  });
};

export const fileAttr = (path: string) => {
  return axios.get<Response<FileAttr>>(`system/file/fileAttr`, {
    params: {
      path,
    },
  });
};
