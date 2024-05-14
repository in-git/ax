import { testResetForm, testShowForm,testForm } from './form';
import { testKeys, testQuery, testTable } from './table';
import {
  deleteTest,
  fetchTestById ,
  fetchTestList,
  exportTest
} from '@/api/modules/system/test/test';
import { response } from '@/utils/table/table';

export const testList = async () => {
  try {
     testTable.value.loading = true;
      const { data } = await fetchTestList(testQuery.value);
      testTable.value.data = data.rows;
      testQuery.value.total = data.total;
      testTable.value.loading = false;
  } catch (error) {
    testTable.value.loading = false;
  }

};

export const testEdit = async (id?: number) => {
    let targetId: number = id ? id : testKeys.value[0];
    testTable.value.loading = true;
    const { data } = await fetchTestById(targetId);
    if (data.data) {
        testForm.value = data.data;
        testShowForm.value = true;
    }
    testTable.value.loading = false;
};

export const testCreate = async () => {
  testResetForm();
  testShowForm.value = true;
};

export const testDelete = async (id?: number) => {
  let ids = id ? [id] : testKeys.value;
  await response(deleteTest, ids);
  await testList();
   testKeys.value=[]
};
// 导出EXCEL文件
export const testExport = () => {
  return exportTest({
    pageNum: testQuery.value.pageNum,
    pageSize: testQuery.value.pageSize,
  });
};
