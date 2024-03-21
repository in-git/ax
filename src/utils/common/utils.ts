export const copyText = (text: string) => {
  // 添加一个input元素放置需要的文本内容
  const copyContent = document.createElement('input');
  copyContent.value = text;
  document.body.appendChild(copyContent);
  // 选中并复制文本到剪切板
  copyContent.select();
  document.execCommand('copy');
  // 移除input元素
  document.body.removeChild(copyContent);
};

/**
 * @description 复制
 * @param {*} id DOM ID
 */
export const copyDomText = (node: HTMLElement) => {
  const createRange = document.createRange();
  createRange.selectNodeContents(node);
  const selection = document.getSelection() as Selection;
  selection.removeAllRanges();
  selection.addRange(createRange);
  document.execCommand('Copy');
  selection.removeAllRanges();
};

export const createStyle = (code: string) => {
  const style = document.createElement('style');
  // for Chrome Firefox Opera Safari
  style.appendChild(document.createTextNode(code));
  // for IE
  // style.styleSheet.cssText = code;
  const head = document.getElementsByTagName('head')[0];
  head.appendChild(style);
};
export const openLink = (href: string) => {
  const link = document.createElement('a') as HTMLAnchorElement;
  link.href = href;
  link.target = '_blank';
  document.body.append(link);
  link.click();
  setTimeout(() => link.parentNode?.removeChild(link));
};

export const importImage = (src: string) => {
  return new URL(src, import.meta.url).href;
};

export const importAssets = (src: string) => {
  return importImage(`../assets/${src}`);
};

export function range(loc: number, min: number, max: number) {
  if (loc > max) {
    return max;
  }
  if (loc < min) {
    return min;
  }
  return loc;
}

/**
 * 描述:过滤布尔值
 *  */
export const boolValue = (bool = true, truth = '', falsely = '') => {
  return bool ? truth : falsely;
};

export const formatDate = (time?: Date) => {
  const date = !time ? new Date() : new Date(time);
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // 月份是从0开始的
  const day = date.getDate();
  const hour = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();
  const newTime = `${year}-${month}-${day} ${hour}:${min}:${sec}`;
  return newTime;
};

export function intersect(rectA: DOMRect, rectB: DOMRect) {
  return !(
    rectB.y + rectB.height < rectA.y ||
    rectB.x > rectA.x + rectA.width ||
    rectB.y > rectA.y + rectA.height ||
    rectB.x + rectB.width < rectA.x
  );
}
export function getCurrentTime() {
  const now = new Date();
  const options: Intl.DateTimeFormatOptions = {
    hour12: false,
    hour: 'numeric',
    minute: 'numeric',
  };
  return now.toLocaleTimeString('zh-CN', options);
}
export function getCurrentDateTime(): {
  time: string;
  date: string;
  week: string;
} {
  const now = new Date();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const day = now.getDay();

  const time = getCurrentTime();
  const weekString = `星期${'日一二三四五六'[day]}`;

  return { time, date: `${month}月${date}日`, week: weekString };
}

export const getBooleanText = (bool: boolean) => {
  return bool ? '是' : '否';
};

export const setProp = (variable: string, value: any) => {
  document.documentElement.style.setProperty(variable, value);
};
