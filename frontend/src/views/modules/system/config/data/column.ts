import type { TableColumnProps } from 'ant-design-vue';

const configColumns = ref<TableColumnProps[]>([
{
    title:"参数名称",
    dataIndex:"configName"
},
{
    title:"参数键名",
    dataIndex:"configKey"
},
{
    title:"参数键值",
    dataIndex:"configValue"
},
{
    title:"系统内置（Y是 N否）",
    dataIndex:"configType"
},
{
    title:"备注",
    dataIndex:"remark"
},
]);

export { configColumns };
