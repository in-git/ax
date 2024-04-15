import { ossURL } from '@/api/utils/config';

export const getGalleryImage = (storage: 'oss' | 'local') => {
  return storage === 'local' ? '' : ossURL;
};
