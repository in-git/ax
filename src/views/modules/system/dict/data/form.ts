export const showDictFormForm = ref(false);

const form: SystemDict = {
  createBy: '',
  createTime: '',
  remark: '',
  dictId: 0,
  dictName: '',
  dictType: '',
  status: '',
};

export const dictForm = ref<SystemDict>({
  ...form,
});

export const reset__form = () => {
  dictForm.value = {
    ...form,
  };
};
