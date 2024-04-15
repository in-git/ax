import useSystemStore from '@/store/system';
import useUserStore from '@/store/user';
import { message } from 'ant-design-vue';

interface ExportData {
  url: string;
  data: any;
  fileName: string;
  method: 'POST' | 'GET';
}
// 导出文件接口
// 已使用:代码下载
export const exportFile = async (config: ExportData) => {
  const dev = useSystemStore();
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
/* 上传文件 */
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

/* 上传到OSS */
export const uploadToOss = (file: File) => {
  const dev = useSystemStore();
  const userStore = useUserStore();
  fetch(`${dev.$state.developer.baseURL}/common/upload-oss`, {
    body: file,
    method: 'POST',
    headers: {
      Authorization: `Bearer ${userStore.$state.token}`,
    },
  });
};
