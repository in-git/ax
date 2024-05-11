import { viewFile } from '@/api/modules/tool/file/file';
import { Modal } from 'ant-design-vue';
import type { DataNode } from 'ant-design-vue/es/tree';
import { openImage, openNotepad } from './widget';

function blobToText(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    // 设置FileReader的加载完成事件处理程序
    reader.onload = (event: ProgressEvent<FileReader>) => {
      // 在加载完成时，将结果解析为文本并传递给 resolve 函数
      const text = event.target?.result as string;
      resolve(text);
    };

    // 设置FileReader的错误事件处理程序
    reader.onerror = (event: ProgressEvent<FileReader>) => {
      // 如果发生错误，通过 reject 函数传递错误信息
      reject(event.target?.error);
    };

    // 读取Blob对象中的数据为文本
    reader.readAsText(blob);
  });
}
/**
 * @description: 处理文件，根据不同的类型，调用不同的程序
 */
export const settleFile = async (item: DataNode) => {
  if (fileMap[item.type]) {
    fileMap[item.type](item);
  } else {
    Modal.confirm({
      title: '没有找到合适的程序',
      content: '是否用记事本强制打开,如果文件内容是二进制,则会乱码',
      onOk() {},
      centered: true,
    });
  }
};

type Map = {
  [key: string]: (content: DataNode) => any;
};

const fileMap: Map = {
  async text(data: DataNode) {
    const resp = await viewFile(`${data.key}`);
    console.log(resp);
    const text = await blobToText(resp);
    openNotepad({ data: text, allowSave: true });
  },
  image(data: DataNode) {
    openImage(data.src);
  },
};
