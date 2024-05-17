import type { TableColumnProps } from 'ant-design-vue';

const testColumns = ref<TableColumnProps[]>([
{
    title:"文本字段",
    dataIndex:"textField"
},
{
    title:"数字字段",
    dataIndex:"numberField"
},
{
    title:"日期字段",
    dataIndex:"dateField"
},
{
    title:"富文本字段",
    dataIndex:"richTextField"
},
{
    title:"下拉框字段",
    dataIndex:"selectField"
},
{
    title:"布尔字段",
    dataIndex:"booleanField"
},
{
    title:"创建时间",
    dataIndex:"createTime"
},
{
    title:"更新时间",
    dataIndex:"updateTime"
},
{
    title:"文本域",
    dataIndex:"textareaField"
},
{
    title:"树形选择器",
    dataIndex:"treeField"
},
]);

export { testColumns };
