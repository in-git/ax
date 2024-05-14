import { batchGenCode, deleteCodeByIds, fetchCodeList } from '@/api/modules/tool/gen/gen';
import { openWindow } from '@/global/window/window';
import { response } from '@/utils/table/table';
import { nanoid } from 'nanoid';
import ImportDb from '../subpage/import-db/ImportDb.vue';
import { codeKeys, codeQuery, codeTable } from './table';

export const codeList = async () => {
  codeTable.value.loading = true;
  const { data } = await fetchCodeList(codeQuery.value);
  codeTable.value.data = data.rows;
  codeQuery.value.total = data.total;
  codeTable.value.loading = false;
};

/**
 * @description: 编辑表信息
 * @param {string} id
 */
export const editCode = async (id?: string) => {};

/**
 * @description: 删除单张表
 * @param {string} name
 */
export const deleteTable = async (name: string) => {
  await response(deleteCodeByIds, name);
  codeList();
};

/**
 * @description: 下载代码
 */
export const downloadCode = () => {
  response(batchGenCode, codeKeys.value);
};

/**
 * @description: 打开导入数据库的窗口
 */
export const importDb = () => {
  openWindow({
    title: '导入数据库',
    component: markRaw(ImportDb),
    id: nanoid(),
  });
};
