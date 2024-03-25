import useDeveloperStore from '@/store/developer/index';
import useUserStore from '@/store/user';

// 批量绑定模板接口
export const exportFile = async (url: string, data?: any, fileName = 'file') => {
  const dev = useDeveloperStore();
  const userStore = useUserStore();

  try {
    const response = await fetch(dev.$state.baseURL + url, {
      method: 'POST',
      body: data,
      headers: {
        Authorization: `Bearer ${userStore.$state.token}`,
      },
    });

    const blob = await response.blob();
    const href = window.URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = href;
    link.download = fileName;
    link.click();

    window.URL.revokeObjectURL(href);
  } catch (error) {
    console.error('Error exporting file:', error);
  }
};
