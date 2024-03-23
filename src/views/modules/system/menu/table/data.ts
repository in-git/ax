import type { IQuery } from '@/api/config/types';
import { menuList } from '@/api/modules/system/menu/menu';
import type { SystemMenu } from '@/api/modules/system/menu/types';
import { convertToTree } from '@/utils/common/format';
import type { Key } from 'ant-design-vue/es/_util/type';

export const menuData = ref();

interface MenuQuery {
  menuName: string;
}

interface MenuConf {
  loading: boolean;
  data: SystemMenu[];
  selectedKeys: Key[];
  query: IQuery<MenuQuery>;
}

export const menuConfig = ref<MenuConf>({
  loading: false,
  data: [],
  query: {
    pageNum: 1,
    pageSize: 10,
    menuName: '',
    status: '',
  },
  selectedKeys: [],
});

export const loadMenuData = async () => {
  menuConfig.value.loading = true;
  const { data } = await menuList(menuConfig.value.query);
  if (data.data) {
    menuConfig.value.data = convertToTree(data.data);
  }
  menuConfig.value.loading = false;
};
