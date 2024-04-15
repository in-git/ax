import type { IQuery, TableConfig } from '@/api/config/types';
import { DeleteOutlined } from '@ant-design/icons-vue';
import type { ItemType } from 'ant-design-vue';
import { galleryDelete, galleryList } from './curd';
import type {  SystemGallery } from '@/api/modules/system/gallery/types';

export const galleryTable = ref<TableConfig<SystemGallery>>({
  //这里根据实际情况修改
  //作用：勾选的唯一标识
  rowKey: 'galleryId',
  data: [],
  loading: false,
  moduleName: 'gallery',
});
//查询参数接口
interface galleryQuery {
  imageName: "" ;
  type: "" ;
  imageUrl: "" ;
}
// 预览模式:卡片|表格
export const viewMode = ref<'card' | 'table'>('table');

//查询参数
export const galleryQuery = ref<IQuery<galleryQuery>>({
  pageNum: 1,
  pageSize: 10,
  total: 0,
  imageName: "" ,
  type: "" ,
  imageUrl: "" ,
});

//已选中的元素数组
export const galleryKeys = ref<number[]>([]);


//操作的下拉菜单
export const galleryOperationList: ItemType[] = [
  {
    label: '删除',
    key: 'delete',
    icon: h(DeleteOutlined),
    async onClick() {
      await galleryDelete();
      galleryList();
    },
  },
];
