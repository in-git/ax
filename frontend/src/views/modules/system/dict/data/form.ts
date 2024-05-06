export const showDictForm = ref(false);

const form: SystemDict = {
  createBy: '',
  createTime: '',
  remark: '',
  dictId: 0,
  dictName: '',
  dictType: '',
  status: '0',
};

export const dictForm = ref<SystemDict>({
  ...form,
});

export const resetDictForm = () => {
  dictForm.value = {
    ...form,
  };
};

export const editDictConfig = ref(false);
