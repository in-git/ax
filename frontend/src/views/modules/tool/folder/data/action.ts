import { deleteFiles, getSystemPath } from '@/api/modules/tool/file/file';
import { settleFile } from '@/global/window/file';
import { response } from '@/utils/table/table';
import type { DataNode } from 'ant-design-vue/es/tree';
import { currentFolder, currentPath, selectedFolders } from './data';

export const openFile = (item: DataNode) => {
  settleFile(`${item.type}`, item.src);
};

/**
 * @description: 加载，刷新文件夹,如果传入path
 * @return
 */
export const loadPath = async (path: string = '') => {
  let target = path ? path : currentPath.value;
  const { data } = await getSystemPath(target);
  if (data.data) {
    currentFolder.value = data.data;
  }
};

export const delFile = async () => {
  await response(
    deleteFiles,
    selectedFolders.value.map(e => `${e}`),
  );
  loadPath();
};
