import { galleryResetForm, galleryShowForm,galleryForm } from './form';
import { galleryKeys, galleryQuery, galleryTable } from './table';
import {
  deleteGallery,
  fetchGalleryById ,
  fetchGalleryList,
} from '@/api/modules/system/gallery/gallery';
import { response } from '@/utils/table/table';

export const galleryList = async () => {
  galleryTable.value.loading = true;
  const { data } = await fetchGalleryList(galleryQuery.value);
  galleryTable.value.data = data.rows;
  galleryQuery.value.total = data.total;
  galleryTable.value.loading = false;
};

export const galleryEdit = async (id?: number) => {
    let targetId: number = id ? id : galleryKeys.value[0];
    galleryTable.value.loading = true;
    const { data } = await fetchGalleryById(targetId);
    if (data.data) {
        galleryForm.value = data.data;
        galleryShowForm.value = true;
    }
    galleryTable.value.loading = false;
};

export const galleryCreate = async () => {
  galleryResetForm();
  galleryShowForm.value = true;
};

export const galleryDelete = async (id?: number) => {
  let ids = id ? [id] : galleryKeys.value;
  await response(deleteGallery, ids);
  await galleryList();
   galleryKeys.value=[]
};
