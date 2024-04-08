import usePageStore from '@/store/page';
import useUserStore from '@/store/user';
import { message } from 'ant-design-vue';

interface ExportData {
  url: string;
  data: any;
  fileName: string;
  method: 'POST' | 'GET';
}
// 导出文件接口
export const exportFile = async (config: ExportData) => {
  const dev = usePageStore();
  const userStore = useUserStore();

  try {
    const response = await fetch(dev.$state.developer.baseURL + config.url, {
      method: config.method || 'GET',
      body: config.data,
      headers: {
        Authorization: `Bearer ${userStore.$state.token}`,
      },
    });

    const blob = await response.blob();
    const href = window.URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = href;
    link.download = config.fileName;
    link.click();

    window.URL.revokeObjectURL(href);
  } catch (error: any) {
    message.warning('Error exporting file!');
  }
};
interface UploadData {
  url: string;
  formData: FormData;
}
export const uploadFile = async (data: UploadData) => {
  const userStore = useUserStore();
  await fetch(data.url, {
    body: data.formData,
    method: 'POST',
    headers: {
      Authorization: `Bearer ${userStore.$state.token}`,
    },
  });
};
