export const codeShowForm = ref(false);

const form: SystemCode = {
  createBy: '',
  createTime: '',
  updateBy: '',
  tableId: 0,
  tableName: '',
  tableComment: '',
  className: '',
  tplCategory: '',
  tplWebType: '',
  packageName: '',
  moduleName: '',
  businessName: '',
  functionName: '',
  functionAuthor: '',
  genType: '',
  genPath: '',
  columns: [],
  sub: false,
  tree: false,
  crud: false,
};

export const codeForm = ref<SystemCode>({
  ...form,
});

export const codeResetForm = () => {
  codeForm.value = {
    ...form,
  };
};
