import {
  deleteWebsite,
  exportWebsite,
  fetchWebsiteById,
  fetchWebsiteList,
} from '@/api/modules/system/website/website';
import { response } from '@/utils/table/table';
import { websiteForm, websiteResetForm, websiteShowForm } from './form';
import { websiteKeys, websiteQuery, websiteTable } from './table';

export const websiteList = async () => {
  websiteTable.value.loading = true;
  const { data } = await fetchWebsiteList(websiteQuery.value);
  websiteTable.value.data = data.rows;
  websiteQuery.value.total = data.total;
  websiteTable.value.loading = false;
};

export const websiteEdit = async (id?: number) => {
  let targetId: number = id ? id : websiteKeys.value[0];
  websiteTable.value.loading = true;
  const { data } = await fetchWebsiteById(targetId);
  if (data.data) {
    websiteForm.value = data.data;
    websiteShowForm.value = true;
  }
  websiteTable.value.loading = false;
};

export const websiteCreate = async () => {
  websiteResetForm();
  websiteShowForm.value = true;
};

export const websiteDelete = async (id?: number) => {
  let ids = id ? [id] : websiteKeys.value;
  await response(deleteWebsite, ids);
  await websiteList();
  websiteKeys.value = [];
};

export const websiteExport = () => {
  return exportWebsite({
    pageNum: websiteQuery.value.pageNum,
    pageSize: websiteQuery.value.pageSize,
  });
};
