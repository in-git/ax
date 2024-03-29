import type { TableColumnProps } from 'ant-design-vue';

const codeColumns: TableColumnProps[] = [
  { title: '创建者', dataIndex: 'createBy' },
  { title: '更新时间', dataIndex: 'updateTime' },
  { title: '类名', dataIndex: 'className' },
  { title: '模板分类', dataIndex: 'tplCategory' },
  { title: '包名', dataIndex: 'packageName' },
  { title: '模块名', dataIndex: 'moduleName' },
  { title: '业务名', dataIndex: 'businessName' },
  { title: '函数名', dataIndex: 'functionName' },
  { title: '函数作者', dataIndex: 'functionAuthor' },
  { title: '生成类型', dataIndex: 'genType' },
  { title: '生成路径', dataIndex: 'genPath' },
];

export { codeColumns };
