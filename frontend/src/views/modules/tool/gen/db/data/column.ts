export const dbColumns = ref([
  {
    title: '表名称',
    dataIndex: 'tableName',
  },
  {
    title: '表注释',
    dataIndex: 'tableComment',
  },
  // 其他列字段根据需要添加
]);
export default {
  dbColumns,
};
