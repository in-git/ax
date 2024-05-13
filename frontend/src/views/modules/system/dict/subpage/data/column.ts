import type { TableColumnProps } from 'ant-design-vue';

const dataColumns = ref<TableColumnProps[]>([
{
    title:"字典编码",
    dataIndex:"dictCode"
},
{
    title:"字典排序",
    dataIndex:"dictSort"
},
{
    title:"字典标签",
    dataIndex:"dictLabel"
},
{
    title:"字典键值",
    dataIndex:"dictValue"
},
{
    title:"字典类型",
    dataIndex:"dictType"
},
{
    title:"表格回显样式",
    dataIndex:"listClass"
},
{
    title:"是否默认（Y是 N否）",
    dataIndex:"isDefault"
},
{
    title:"状态（0正常 1停用）",
    dataIndex:"status"
},
{
    title:"备注",
    dataIndex:"remark"
},
]);

export { dataColumns };
