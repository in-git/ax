import type { TableColumnProps } from 'ant-design-vue';

const galleryColumns = ref<TableColumnProps[]>([
{
    title:"图片名",
    dataIndex:"imageName"
},
{
    title:"图片类型",
    dataIndex:"type"
},
{
    title:"图片URL",
    dataIndex:"imageUrl"
},
]);

export { galleryColumns };
