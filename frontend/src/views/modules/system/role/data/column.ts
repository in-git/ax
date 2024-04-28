import type { TableColumnProps } from 'ant-design-vue';

const roleColumns = ref<TableColumnProps[]>([
{
    title:"角色名称",
    dataIndex:"roleName"
},
{
    title:"角色权限字符串",
    dataIndex:"roleKey"
},
{
    title:"显示顺序",
    dataIndex:"roleSort"
},
{
    title:"菜单树选择项是否关联显示",
    dataIndex:"menuCheckStrictly"
},
{
    title:"部门树选择项是否关联显示",
    dataIndex:"deptCheckStrictly"
},
{
    title:"角色状态（0正常 1停用）",
    dataIndex:"status"
},
{
    title:"备注",
    dataIndex:"remark"
},
]);

export { roleColumns };
