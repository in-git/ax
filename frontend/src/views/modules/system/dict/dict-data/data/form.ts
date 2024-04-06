export const dictDataShowForm = ref(false);

const form: SystemDictData = {
  createBy: '',
  createTime: '',
  remark: '',
  dictCode: 0,
  dictSort: 0,
  dictLabel: '',
  dictValue: '',
  dictType: '',
  cssClass: '',
  listClass: '',
  isDefault: '',
  status: '',
  default: false,
};

export const dictDataForm = ref<SystemDictData>({
  ...form,
});

export const dictDataResetForm = () => {
  dictDataForm.value = {
    ...form,
  };
};
