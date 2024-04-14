import type { IQuery, TableConfig } from '@/api/config/types';
import { DeleteOutlined } from '@ant-design/icons-vue';
import type { ItemType } from 'ant-design-vue';
import { configDelete, configList } from './curd';
import type {  SystemConfig } from '@/api/modules/system/config/types';

export const configTable = ref<TableConfig<SystemConfig>>({
  //这里根据实际情况修改
  //作用：勾选的唯一标识
  rowKey: 'configId',
  data: [],
  loading: false,
  moduleName: 'config',
});
//查询参数接口
interface configQuery {
  configName: "" ;
  configKey: "" ;
  configValue: "" ;
  configType: "" ;
}
// 预览模式:卡片|表格
export const viewMode = ref<'card' | 'table'>('table');

//查询参数
export const configQuery = ref<IQuery<configQuery>>({
  pageNum: 1,
  pageSize: 10,
  total: 0,
  configName: "" ,
  configKey: "" ,
  configValue: "" ,
  configType: "" ,
});

//已选中的元素数组
export const configKeys = ref<number[]>([]);


//操作的下拉菜单
export const configOperationList: ItemType[] = [
  {
    label: '删除',
    key: 'delete',
    icon: h(DeleteOutlined),
    async onClick() {
      await configDelete();
      configList();
    },
  },
];
