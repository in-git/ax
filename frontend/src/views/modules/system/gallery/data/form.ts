export const galleryShowForm = ref(false);
import type { SystemGallery } from '@/api/modules/system/gallery/types';
import type { Rule } from 'ant-design-vue/es/form/interface';

const form: SystemGallery = {
  galleryId: 0,
  imageName: '',
  type: '',
  imageUrl: '',
  createTime: null,
  updateTime: null,
  storage: 'local',
};

export const galleryForm = ref<SystemGallery>({
  ...form,
});

export const galleryResetForm = () => {
  galleryForm.value = {
    ...form,
  };
};

export const galleryRules: Record<string, Rule[]> = {
  imageName: [{ required: true, trigger: 'change' }],
  type: [{ required: true, trigger: 'change' }],
  imageUrl: [{ required: true, trigger: 'change' }],
};
