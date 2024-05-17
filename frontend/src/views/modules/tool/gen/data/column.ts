import type { ColumnProps } from '@/types/system';

const codeColumns = ref<ColumnProps[]>([
  { title: '函数名', dataIndex: 'functionName' },
  { title: '类名', dataIndex: 'className' },
  { title: '模块名', dataIndex: 'moduleName' },
  { title: '业务名', dataIndex: 'businessName' },
]);

export { codeColumns };
