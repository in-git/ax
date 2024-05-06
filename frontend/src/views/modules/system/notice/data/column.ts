import type { TableColumnProps } from 'ant-design-vue';

const noticeColumns = ref<TableColumnProps[]>([
{
    title:"公告ID",
    dataIndex:"noticeId"
},
{
    title:"公告标题",
    dataIndex:"noticeTitle"
},
{
    title:"公告类型（1通知 2公告）",
    dataIndex:"noticeType"
},
{
    title:"公告内容",
    dataIndex:"noticeContent"
},
{
    title:"公告状态（0正常 1关闭）",
    dataIndex:"status"
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

export { noticeColumns };
