import type { TableColumnProps } from 'ant-design-vue';

const memoColumns = ref<TableColumnProps[]>([
{
    title:"备忘录标题",
    dataIndex:"title"
},
{
    title:"备忘录的值",
    dataIndex:"value"
},
{
    title:"备忘录描述",
    dataIndex:"description"
},
{
    title:"附加值",
    dataIndex:"extra"
},
]);

export { memoColumns };
