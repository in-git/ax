export const codeShowForm = ref(false);
let obj = {
  tables: [],
  rows: [],
  info: {
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
    createBy: '',
    createTime: '',
    updateBy: '',
  },
};
export const codeFormData = ref<CodeResponse>({ ...obj });
export const currentCode = ref<SystemTable>();

export const showDbForm = ref(false);
export const resetCodeFormData = () => {
  codeFormData.value = { ...obj };
};
