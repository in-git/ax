import type { TableColumnProps } from 'ant-design-vue';

const feedbackColumns = ref<TableColumnProps[]>([
{
    title:"反馈内容",
    dataIndex:"feedbackContent"
},
{
    title:"类型",
    dataIndex:"type"
},
{
    title:"用户昵称",
    dataIndex:"nickname"
},
]);

export { feedbackColumns };
