import type { TableColumnProps } from 'ant-design-vue';

const configColumns = ref<TableColumnProps[]>([
{
    title:"参数主键",
    dataIndex:"configId"
},
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
    title:"创建者",
    dataIndex:"createBy"
},
{
    title:"创建时间",
    dataIndex:"createTime"
},
{
    title:"更新者",
    dataIndex:"updateBy"
},
{
    title:"更新时间",
    dataIndex:"updateTime"
},
{
    title:"备注",
    dataIndex:"remark"
},
]);

export { configColumns };
