import type { IQuery, TableConfig } from '@/api/config/types';
import { response } from '@/utils/table/table';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons-vue';
import type { ItemType } from 'ant-design-vue';
import { delMenu } from './curd';
import { menuForm, resetMenuForm, showMenuForm } from './form';

interface MenuQuery {
  menuName: string;
}
export const listMenu = ref();

export const menuTableConfig = ref<TableConfig>({
  rowKey: 'menuId',
  data: [],
  loading: false,
  moduleName: 'menu',
});

export const menuKeys = ref<number[]>([]);

export const menuQuery = ref<IQuery<MenuQuery>>({
  pageNum: 1,
  pageSize: 10,
  menuName: '',
  status: '',
  total: 0,
});

export const menuItems: ItemType[] = [
  {
    label: '添加子目录',
    key: 'create',
    icon: h(PlusOutlined),
    onClick() {
      let parentId = menuForm.value.menuId;
      resetMenuForm();
      menuForm.value.parentId = parentId;
      showMenuForm.value = true;
    },
  },
  {
    label: '删除',
    key: 'delete',
    icon: h(DeleteOutlined),
    onClick() {
      response(delMenu, menuKeys.value);
    },
  },
];
