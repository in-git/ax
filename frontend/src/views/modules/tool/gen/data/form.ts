export const codeShowForm = ref(false);

export const codeFormData = ref<CodeResponse>({
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
});
export const currentCode = ref<SystemCode>();

export const showDbForm = ref(false);
export const openAiGen = ref(false);
