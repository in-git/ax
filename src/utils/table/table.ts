import { message, Modal } from 'ant-design-vue';

export const confirm = (onOk: any) => {
  Modal.confirm({
    title: 'Warning',
    content: '该操作可能影响系统运行',
    onOk,
    centered: true,
  });
};
export const response = async (request: any, ...arg: any) => {
  const { data } = await request(...arg);
  if (!data) {
    return;
  }
  if (data.code === 200) {
    message.success(data);
  } else {
    message.warning(data);
  }
};
