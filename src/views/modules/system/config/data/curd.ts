import { listConfig } from '@/api/modules/system/config/config';
import { configForm, resetConfigForm, showConfigForm } from './form';
import { configQuery, configTable } from './table';

export const configList = async () => {
  configTable.value.loading = true;
  const { data } = await listConfig(configQuery.value);
  configTable.value.data = data;
  configTable.value.loading = false;
};

export const editConfig = async (id: number) => {
  configForm.value = true;
};

export const deleteConfig = async (id: number) => {};

export const updateConfig = async (id: number) => {};

export const createConfig = async () => {
  resetConfigForm();
  showConfigForm.value = true;
};
