import { Modal } from 'ant-design-vue';

export const confirm = (onOk: any) => {
  Modal.confirm({
    title: 'Warning',
    content: '该操作可能影响系统运行',
    onOk,
    centered: true,
  });
};
