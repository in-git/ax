import {
  deleteData,
  exportData,
  fetchDataById,
  fetchDataList,
} from '@/api/modules/system/dict/dict.data';
import { response } from '@/utils/table/table';
import { dataForm, dataResetForm, dataShowForm } from './form';
import { dataKeys, dataQuery, dataTable } from './table';

export const dataList = async () => {
  try {
    dataTable.value.loading = true;
    const { data } = await fetchDataList(dataQuery.value);
    dataTable.value.data = data.rows;
    dataQuery.value.total = data.total;
    dataTable.value.loading = false;
  } catch (error) {
    dataTable.value.loading = false;
  }
};

export const dataEdit = async (id?: number) => {
  let targetId: number = id ? id : dataKeys.value[0];
  dataTable.value.loading = true;
  const { data } = await fetchDataById(targetId);
  if (data.data) {
    dataForm.value = data.data;
    dataShowForm.value = true;
  }
  dataTable.value.loading = false;
};

export const dataCreate = async () => {
  dataResetForm();
  dataShowForm.value = true;
};

export const dataDelete = async (id?: number) => {
  let ids = id ? [id] : dataKeys.value;
  await response(deleteData, ids);
  await dataList();
  dataKeys.value = [];
};
// 导出EXCEL文件
export const dataExport = () => {
  return exportData({
    pageNum: dataQuery.value.pageNum,
    pageSize: dataQuery.value.pageSize,
  });
};
