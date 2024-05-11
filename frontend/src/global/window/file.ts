import { Modal } from 'ant-design-vue';
import { openImage, openNotepad } from './widget';

/**
 * @description: 处理文件，根据不同的类型，调用不同的程序
 * @param {string} type 文件类型
 * @param {string} data 文件数据
 */
export const settleFile = async (type: string, data: string) => {
  if (fileMap[type]) {
    fileMap[type](data);
  } else {
    Modal.confirm({
      title: '没有找到合适的程序',
      content: '是否用记事本强制打开,如果文件内容是二进制,则会乱码',
      onOk() {
        openNotepad({
          data,
          allowSave: true,
        });
      },
      centered: true,
    });
  }
};

type Map = {
  [key: string]: (content: string) => any;
};

const fileMap: Map = {
  text(text: string) {
    openNotepad({
      data: text,
      allowSave: true,
    });
  },
  image(src: string) {
    openImage(src);
  },
};
