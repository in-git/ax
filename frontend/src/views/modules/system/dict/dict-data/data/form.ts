import { dictForm } from '../../data/form';

export const dictDataShowForm = ref(false);
const form: SystemDictData = {
  remark: '',
  dictLabel: '',
  dictValue: '',
  dictType: '',
  cssClass: '',
  listClass: '',
  isDefault: '0',
  status: '0',
};

export const dictDataForm = ref<SystemDictData>({
  ...form,
});

export const resetDictDataForm = () => {
  dictDataForm.value = {
    ...form,
    dictType: dictForm.value.dictType,
  };
};
