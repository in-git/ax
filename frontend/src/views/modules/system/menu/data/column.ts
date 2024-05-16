import type { TableColumnProps } from 'ant-design-vue';

const menuColumns = ref<TableColumnProps[]>([
{
    title:"菜单名称",
    dataIndex:"menuName"
},
{
    title:"显示顺序",
    dataIndex:"orderNum"
},
{
    title:"路由地址",
    dataIndex:"path"
},
{
    title:"组件路径",
    dataIndex:"component"
},
{
    title:"路由参数",
    dataIndex:"query"
},
]);

export { menuColumns };
