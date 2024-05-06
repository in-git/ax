import type { IQuery, TableConfig } from '@/api/config/types';
import { DeleteOutlined } from '@ant-design/icons-vue';
import type { ItemType } from 'ant-design-vue';
import { postDelete, postList } from './curd';
import type {  SystemPost } from '@/api/modules/system/post/types';

export const postTable = ref<TableConfig<SystemPost>>({
  //这里根据实际情况修改
  //作用：勾选的唯一标识
  rowKey: 'postId',
  data: [],
  loading: false,
  moduleName: 'post',
});
//查询参数接口
interface postQuery {
  postCode: "" ;
  postName: "" ;
  postSort: 0 ;
  status: "" ;
}
// 预览模式:卡片|表格
export const viewMode = ref<'card' | 'table'>('table');

//查询参数
export const postQuery = ref<IQuery<postQuery>>({
  pageNum: 1,
  pageSize: 10,
  total: 0,
  postCode: "" ,
  postName: "" ,
  postSort: 0 ,
  status: "" ,
});

//已选中的元素数组
export const postKeys = ref<number[]>([]);


//操作的下拉菜单
export const postOperationList: ItemType[] = [
  {
    label: '删除',
    key: 'delete',
    icon: h(DeleteOutlined),
    async onClick() {
      await postDelete();
      postList();
    },
  },
];
