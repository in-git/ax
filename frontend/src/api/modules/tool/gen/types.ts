interface SystemTable {
  createBy: string;
  createTime: string;
  updateBy: string;
  updateTime?: string;
  remark?: any;
  tableId: number;
  tableName: string;
  tableComment: string;
  subTableName?: any;
  subTableFkName?: any;
  className: string;
  tplCategory: string;
  tplWebType: string;
  packageName: string;
  moduleName: string;
  businessName: string;
  functionName: string;
  functionAuthor: string;
  genType: string;
  genPath: string;
  pkColumn?: any;
  subTable?: any;
  columns: CodeColumn[];
  options?: string;
  treeCode?: any;
  treeParentCode?: any;
  treeName?: any;
  parentMenuId?: string;
  parentMenuName?: any;
  sub: boolean;
  tree: boolean;
  crud: boolean;
}

interface CodeColumn {
  createBy: string;
  createTime: string;
  updateBy: string;
  updateTime?: string;
  remark?: any;
  columnId?: any;
  tableId: number;
  columnName?: any;
  columnComment?: any;
  columnType?: any;
  javaType?: any;
  javaField?: any;
  isPk?: any;
  isIncrement?: any;
  isRequired?: any;
  isInsert?: any;
  isEdit?: any;
  isList?: any;
  isQuery?: any;
  queryType?: any;
  htmlType?: any;
  dictType?: any;
  sort?: any;
  list: boolean;
  required: boolean;
  pk: boolean;
  insert: boolean;
  edit: boolean;
  usableColumn: boolean;
  superColumn: boolean;
  increment: boolean;
  query: boolean;
  capJavaField?: any;
}
interface CodeResponse {
  tables: SystemTable[];
  rows: CodeColumn[];
  info: SystemTable;
}
