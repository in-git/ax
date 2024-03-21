/* eslint-disable no-plusplus */
import { nanoid } from 'nanoid';

export interface UploadType {
  accept?: string;
  muitiple?: boolean;
  size?: number;
  isFolder?: boolean;
}
const createInput = (config: UploadType) => {
  const input = document.createElement('input');
  input.hidden = true;
  input.type = 'file';

  if (config.isFolder) {
    input.webkitdirectory = config.isFolder;
    input.multiple = true;
  } else {
    input.multiple = config.muitiple ?? false;
    input.accept = config.accept ?? '';
  }
  input.click();
  return input;
};
export const useUploadFile = (config: UploadType) => {
  const input = createInput(config);
  return new Promise<Array<File>>(res => {
    input.onchange = () => {
      const { files } = input;
      if (!files) return;
      if (files.length === 0) return;
      let fileList = Array.from(files);
      fileList = fileList.filter(item => {
        if (!config.size) {
          config.size = 500 * 1024;
        }
        if (item.size > config.size * 1024) {
          return null;
        }
        return item;
      });
      res(fileList);
    };
  });
};
export const useUploadFolder = () => {
  const input = createInput({
    isFolder: true,
  });
  return new Promise(res => {
    input.onchange = () => {
      if (input.files) res(input.files);
    };
  });
};
/* 文件转base64 */
export const toBase64 = (file: File) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  return new Promise<string>(res => {
    reader.onload = () => {
      res(reader.result as string);
    };
  });
};

/* 文件转文本 */
export const toText = (file: File) => {
  const reader = new FileReader();
  reader.readAsText(file);
  return new Promise<string>(res => {
    reader.onload = () => {
      res(reader.result as string);
    };
  });
};

// 判断的是否是JSON字符串
export const isJson = (str: string): boolean => {
  try {
    const obj = JSON.parse(str);
    if (typeof obj === 'object' && obj) {
      return true;
    }
    return false;
  } catch (e) {
    return false;
  }
};

/* 图片地址转BASE64 */

/* 文件转二进制 */
export const toBinary = (file: File): Promise<ArrayBuffer | any> => {
  const reader = new FileReader();
  reader.readAsArrayBuffer(file);
  return new Promise(res => {
    reader.onload = () => {
      const binaryData = reader.result;
      res(binaryData);
    };
  });
};
export function downloadBase64Image(base64: string, fileName: string) {
  // 分割 Base64 字符串
  const parts = base64.split(',');
  const mimeType = parts[0].split(':')[1];
  const data = window.atob(parts[1]);

  // 创建 Uint8Array 缓冲区
  const buffer = new Uint8Array(data.length);
  for (let i = 0; i < data.length; i++) {
    buffer[i] = data.charCodeAt(i);
  }

  // 创建 Blob 对象
  const blob = new Blob([buffer], { type: mimeType });

  // 创建临时链接
  const url = URL.createObjectURL(blob);

  // 创建下载链接并设置属性
  const link = document.createElement('a');
  link.href = url;
  // eslint-disable-next-line prefer-destructuring
  link.download = fileName.split('.')[0];

  // 触发点击事件开始下载
  document.body.appendChild(link);
  link.click();

  // 释放临时链接
  URL.revokeObjectURL(url);

  // 删除<a>元素
  document.body.removeChild(link);
}

// type:文件类型
export function base64ToBlob(urlData: string, type: string) {
  const arr = urlData.split(',');
  const array = arr[0].match(/:(.*?);/);
  const mime = (array && array.length > 1 ? array[1] : type) || type;
  // 去掉url的头，并转化为byte
  const bytes = window.atob(arr[1]);
  // 处理异常,将ascii码小于0的转换为大于0
  const ab = new ArrayBuffer(bytes.length);
  // 生成视图（直接针对内存）：8位无符号整数，长度1个字节
  const ia = new Uint8Array(ab);
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < bytes.length; i++) {
    ia[i] = bytes.charCodeAt(i);
  }
  return new Blob([ab], {
    type: mime,
  });
}
export function downloadFile(text: string, fileName: string) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', text, true);
  xhr.responseType = 'blob';

  xhr.onload = () => {
    if (xhr.status === 200) {
      const blob = xhr.response;
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = fileName;
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  xhr.send();
}
export function downloadExportFile(blob: Blob, fileName: string, fileType = 'png') {
  const downloadElement = document.createElement('a');
  let href: any = blob;
  if (typeof blob === 'string') {
    downloadElement.target = '_blank';
  } else {
    href = window.URL.createObjectURL(blob); // 创建下载的链接
  }
  downloadElement.href = href;
  downloadElement.download = `${fileName}.${fileType}`; // 下载后文件名
  document.body.appendChild(downloadElement);
  downloadElement.click(); // 触发点击下载
  document.body.removeChild(downloadElement); // 下载完成移除元素
  if (typeof blob !== 'string') {
    window.URL.revokeObjectURL(href); // 释放掉blob对象
  }
}
export function downloadTextFile(fileContent: string, fileName: string): void {
  // 创建 Blob 对象
  const blob: Blob = new Blob([fileContent], {
    type: 'text/plain;charset=utf-8',
  });

  // 创建下载链接
  const link: HTMLAnchorElement = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = fileName;

  // 添加链接到页面并触发下载
  document.body.appendChild(link);
  link.click();

  // 清理创建的 URL 对象和链接元素
  URL.revokeObjectURL(link.href);
  document.body.removeChild(link);
}

export function fetchText(url: string) {
  return new Promise(res => {
    fetch(url)
      .then(response => response.text())
      .then(content => {
        res(content);
      });
  });
}
/* 获取文件拓展名 */
export function getFileExtension(fileName: string) {
  return fileName.match(/\.([^.]+)$/)?.[1];
}
export function arrayBufferToFile(
  arrayBuffer: ArrayBuffer,
  fileName: string = nanoid().slice(0, 8),
) {
  const blob = new Blob([arrayBuffer]);
  const file = new File([blob], fileName);
  return file;
}

export function base64toFile(base64String: string, filename: string = nanoid()): File {
  const arr = base64String.split(',');
  const fileType = arr[0].match(/:(.*?);/)?.[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: fileType });
}

export function blobToBase64(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      resolve(reader.result as string);
    };
    reader.readAsDataURL(blob);
  });
}
export const downloadText = (text: string, filename = '', suffix = '') => {
  const element = document.createElement('a');
  let file = '';
  element.setAttribute('href', `data:json/plain;charset=utf-8,${encodeURIComponent(text)}`);
  if (!filename) {
    file = `${nanoid().slice(0, 8)}.${suffix}`;
  } else {
    file = filename + suffix;
  }
  element.setAttribute('download', file);

  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
};

// 检测视频是否能够播放
export function canPlayVideo(video: HTMLVideoElement): boolean {
  const supportedFormats: string[] = ['video/mp4', 'video/webm', 'video/ogg']; // 支持的视频格式

  for (let i = 0; i < supportedFormats.length; i++) {
    const format: string = supportedFormats[i];
    if (video.canPlayType(format) === 'maybe' || video.canPlayType(format) === 'probably') {
      return true;
    }
  }

  return false;
}
export function isBase64(str: string): boolean {
  const base64Regex = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/;
  return base64Regex.test(str);
}
