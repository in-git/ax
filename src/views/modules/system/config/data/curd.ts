import { listConfig, selectConfig } from '@/api/modules/system/config/config';
import { configForm, resetConfigForm, showConfigForm } from './form';
import { configKeys, configQuery, configTable } from './table';

export const configList = async () => {
  configTable.value.loading = true;
  const { data } = await listConfig(configQuery.value);
  configTable.value.data = data.rows;
  configTable.value.loading = false;
};

export const editConfig = async (id?: number) => {
  let targetId = id ? id : configKeys.value[0];
  const { data } = await selectConfig(targetId);
  if (data.data) {
    configForm.value = data.data;
    showConfigForm.value = true;
  }
};

export const deleteConfig = async (id: number) => {};

export const updateConfig = async (data: number) => {};

export const createConfig = async () => {
  resetConfigForm();
  showConfigForm.value = true;
};
