import type { TableColumnProps } from 'ant-design-vue';

const noticeColumns = ref<TableColumnProps[]>([
{
    title:"公告标题",
    dataIndex:"noticeTitle"
},
{
    title:"公告类型",
    dataIndex:"noticeType"
},
{
    title:"公告内容",
    dataIndex:"noticeContent"
},
{
    title:"公告状态",
    dataIndex:"status"
},
{
    title:"备注",
    dataIndex:"remark"
},
]);

export { noticeColumns };
