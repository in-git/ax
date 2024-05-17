import { batchGenCode, deleteCodeByIds, fetchCodeList, synchDb } from '@/api/modules/tool/gen/gen';
import { getTempId, openWindow } from '@/global/window/window';
import { response } from '@/utils/table/table';
import { nanoid } from 'nanoid';
import Column from '../subpage/column/Column.vue';
import ImportDb from '../subpage/import-db/ImportDb.vue';
import { codeKeys, codeQuery, codeTable } from './table';
/**
 * @description: 加载代码列表
 */
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
export const editTable = async (id?: string) => {
  const targeId = id ? id : codeKeys.value[0];
  openWindow({
    title: '低代码配置',
    component: markRaw(Column),
    id: getTempId(),
    data: targeId,
    w: 900,
  });
};

/**
 * @description: 删除单张表
 * @param {string} name
 */
export const deleteTable = async (name: string) => {
  await response(deleteCodeByIds, name);
  codeKeys.value = [];
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

/**
 * @description: 同步数据库
 * @param {string} tableName 数据表名
 */
export const asyncTable = async (tableName: string) => {
  await response(synchDb, tableName);
  codeList();
};
