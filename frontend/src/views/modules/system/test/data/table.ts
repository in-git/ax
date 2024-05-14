
import type { IQuery, TableConfig } from '@/api/config/types';
import { DeleteOutlined } from '@ant-design/icons-vue';
import type { ItemType } from 'ant-design-vue';
import { testDelete, testList } from './curd';
import type {  SystemTest } from '@/api/modules/system/test/types';

export const testTable = ref<TableConfig<SystemTest>>({
  //作用：勾选的唯一标识
  rowKey: 'testId',
  data: [],
  loading: false,
  moduleName: 'test',
});
//查询参数接口
interface testQuery {
  textareaField: "" ;
  treeField: "" ;
}
// 预览模式:卡片|表格
export const viewMode = ref<'card' | 'table'>('table');

//查询参数
export const testQuery = ref<IQuery<testQuery>>({
  pageNum: 1,
  pageSize: 10,
  total: 0,
  textareaField: "" ,
  treeField: "" ,
});

// 已选中的元素数组
export const testKeys = ref<number[]>([]);

