import { deleteFiles, fileAttr, getSystemPath } from '@/api/modules/file/file';
import { getSystemInfo } from '@/api/modules/monitor/server/server';
import { settleFile } from '@/global/window/file';
import { response } from '@/utils/table/table';
import type { DataNode } from 'ant-design-vue/es/tree';
import {
  currentFolder,
  currentPath,
  fileInfo,
  folderLoading,
  selectedFolders,
  selectedPaths,
  sysInfo,
} from './data';

/**
 * @description: 打开一个文件或文件夹
 * @param {DataNode} item
 */
export const openFile = (item: DataNode) => {
  if (item.type === 'folder') {
    selectedPaths.value = [item.key];
    currentPath.value = `${item.key}`;
    loadPath(`${item.key}`);
  } else {
    settleFile(item);
  }
};

/**
 * @description: 加载，刷新文件夹,如果传入path
 * @return
 */
export const loadPath = async (path: string = '') => {
  try {
    folderLoading.value = true;
    let target = path ? path : currentPath.value;
    const { data } = await getSystemPath(target);
    if (data.data) {
      currentFolder.value = data.data;
    }
    folderLoading.value = false;
  } catch (error) {
    folderLoading.value = false;
  }
};

export const delFile = async () => {
  await response(
    deleteFiles,
    selectedFolders.value.map(e => `${e}`),
  );
  loadPath();
};

/**
 * @description: 获取系统信息
 */
export const getSys = async () => {
  if (!sysInfo.value) {
    const { data } = await getSystemInfo();
    if (data.data) sysInfo.value = data.data;
  }
};

/**
 * @description: 获取系统分隔符
 */
export const getSeparator = (): string => {
  let separator = '/';
  return sysInfo.value?.fileSeparator || separator;
};

export const isWindows = () => {
  return sysInfo.value?.osName.startsWith('win');
};

/* 查询单个文件信息 */
export const getInfo = async () => {
  const path = selectedFolders.value[0];
  if (selectedFolders.value.length === 1) {
    const { data } = await fileAttr(`${path}`);
    fileInfo.value = data.data;
  }
};
/**
 * @description: 根据不同操作系统链接两个路径
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
export const concatWithSeparator = (a: string, b: string): string => {
  return a + getSeparator() + b;
};
export const getFileNameFromPath = (filePath: string): string => {
  const pathSegments = filePath.split(getSeparator());
  const fileNameWithExtension = pathSegments[pathSegments.length - 1];
  return fileNameWithExtension;
};
