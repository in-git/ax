export const dicDataShowForm = ref(false);

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

export const dicDataForm = ref<SystemDictData>({
  ...form,
});

export const dicDataResetForm = () => {
  dicDataForm.value = {
    ...form,
  };
};
