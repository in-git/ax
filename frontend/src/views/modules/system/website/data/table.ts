import type { IQuery, TableConfig } from '@/api/config/types';
import { DeleteOutlined } from '@ant-design/icons-vue';
import type { ItemType } from 'ant-design-vue';
import { websiteDelete, websiteList } from './curd';
import type {  SystemWebsite } from '@/api/modules/system/website/types';

export const websiteTable = ref<TableConfig<SystemWebsite>>({
  //这里根据实际情况修改
  //作用：勾选的唯一标识
  rowKey: 'websiteId',
  data: [],
  loading: false,
  moduleName: 'website',
});
//查询参数接口
interface websiteQuery {
  name: "" ;
  url: "" ;
  type: "" ;
}
// 预览模式:卡片|表格
export const viewMode = ref<'card' | 'table'>('table');

//查询参数
export const websiteQuery = ref<IQuery<websiteQuery>>({
  pageNum: 1,
  pageSize: 10,
  total: 0,
  name: "" ,
  url: "" ,
  type: "" ,
});

//已选中的元素数组
export const websiteKeys = ref<number[]>([]);


//操作的下拉菜单
export const websiteOperationList: ItemType[] = [
  {
    label: '删除',
    key: 'delete',
    icon: h(DeleteOutlined),
    async onClick() {
      await websiteDelete();
      websiteList();
    },
  },
];
