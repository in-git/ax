import {
  deleteType,
  exportType,
  fetchTypeById,
  fetchTypeList,
} from '@/api/modules/system/dict/dict';
import { openWindow } from '@/global/window/window';
import { response } from '@/utils/table/table';
import SystemDictData from '../subpage/index.vue';
import { typeForm, typeResetForm, typeShowForm } from './form';
import { typeKeys, typeQuery, typeTable } from './table';

export const typeList = async () => {
  try {
    typeTable.value.loading = true;
    const { data } = await fetchTypeList(typeQuery.value);
    typeTable.value.data = data.rows;
    typeQuery.value.total = data.total;
    typeTable.value.loading = false;
  } catch (error) {
    typeTable.value.loading = false;
  }
};

export const typeEdit = async (id?: number) => {
  let targetId: number = id ? id : typeKeys.value[0];
  typeTable.value.loading = true;
  const { data } = await fetchTypeById(targetId);
  if (data.data) {
    typeForm.value = data.data;
    typeShowForm.value = true;
  }
  typeTable.value.loading = false;
};

export const typeCreate = async () => {
  typeResetForm();
  typeShowForm.value = true;
};

export const typeDelete = async (id?: number) => {
  let ids = id ? [id] : typeKeys.value;
  await response(deleteType, ids);
  await typeList();
  typeKeys.value = [];
};
// 导出EXCEL文件
export const typeExport = () => {
  return exportType({
    pageNum: typeQuery.value.pageNum,
    pageSize: typeQuery.value.pageSize,
  });
};
export const editType = (record: SystemDict) => {
  openWindow({
    title: '系统字典编辑',
    component: markRaw(SystemDictData),
    data: record,
    id: `dictType-${record.dictType}`,
  });
};
