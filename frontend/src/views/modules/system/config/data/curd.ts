import {
  deleteConfigByIds,
  fetchConfigById,
  fetchConfigList,
} from '@/api/modules/system/config/config';
import { response } from '@/utils/table/table';
import { configForm, resetConfigForm, showConfigForm } from './form';
import { configKeys, configQuery, configTable } from './table';

export const configList = async () => {
  configTable.value.loading = true;
  const { data } = await fetchConfigList(configQuery.value);
  configTable.value.data = data.rows;
  configTable.value.loading = false;
};

export const editConfig = async (id?: number) => {
  let targetId = id ? id : configKeys.value[0];
  const { data } = await fetchConfigById(targetId);
  if (data.data) {
    configForm.value = data.data;
    showConfigForm.value = true;
  }
};

export const delConfig = async (id?: number) => {
  const targetId = id ? [id] : configKeys.value[0];
  await response(deleteConfigByIds, targetId);
  configList();
};

export const updateConfig = async (data: number) => {};

export const createConfig = async () => {
  resetConfigForm();
  showConfigForm.value = true;
};
