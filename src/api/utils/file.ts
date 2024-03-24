import useDeveloperStore from '@/store/developer/index';
import useUserStore from '@/store/user';
import axios from 'axios';

// 批量绑定模板接口
export const exportFile = async (url: string, data?: any) => {
  const dev = useDeveloperStore();
  const userStore = useUserStore();
  const res: any = await axios.post(dev.$state.baseURL + url, data, {
    headers: {
      Authorization: `Bearer ${userStore.$state.token}`,
      ContentType: 'multipart/form-data',
    },
    responseType: 'arraybuffer',
  });
  const blob = new Blob([res.data], {
    type: 'application/vnd.ms-excel',
  });
  const href = window.URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = href;
  link.download = 'file';
  link.click();
  window.URL.revokeObjectURL(href);
};
