import { configResetForm, configShowForm,configForm } from './form';
import { configKeys, configQuery, configTable } from './table';
import {
  deleteConfig,
  fetchConfigById ,
  fetchConfigList,
} from '@/api/modules/system/config/config';
import { response } from '@/utils/table/table';

export const configList = async () => {
  configTable.value.loading = true;
  const { data } = await fetchConfigList(configQuery.value);
  configTable.value.data = data.rows;
  configQuery.value.total = data.total;
  configTable.value.loading = false;
};

export const configEdit = async (id?: number) => {
    let targetId: number = id ? id : configKeys.value[0];
    configTable.value.loading = true;
    const { data } = await fetchConfigById(targetId);
    if (data.data) {
        configForm.value = data.data;
        configShowForm.value = true;
    }
    configTable.value.loading = false;
};

export const configCreate = async () => {
  configResetForm();
  configShowForm.value = true;
};

export const configDelete = async (id?: number) => {
  let ids = id ? [id] : configKeys.value;
  await response(deleteConfig, ids);
  await configList();
   configKeys.value=[]
};
