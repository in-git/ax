import type { TableColumnProps } from 'ant-design-vue';

const websiteColumns = ref<TableColumnProps[]>([
{
    title:"网页ID",
    dataIndex:"websiteId"
},
{
    title:"网页名称",
    dataIndex:"name"
},
{
    title:"网页URL",
    dataIndex:"url"
},
{
    title:"创建时间",
    dataIndex:"createTime"
},
{
    title:"网页描述",
    dataIndex:"description"
},
{
    title:"网页类型",
    dataIndex:"type"
},
{
    title:"创建时间",
    dataIndex:"updateTime"
},
]);

export { websiteColumns };
