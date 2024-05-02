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

export const openLink = (href: string) => {
  const link = document.createElement('a') as HTMLAnchorElement;
  link.href = href;
  link.target = '_blank';
  document.body.append(link);
  link.click();
  setTimeout(() => link.parentNode?.removeChild(link));
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

export function intersect(rectA: DOMRect, rectB: DOMRect) {
  return !(
    rectB.y + rectB.height < rectA.y ||
    rectB.x > rectA.x + rectA.width ||
    rectB.y > rectA.y + rectA.height ||
    rectB.x + rectB.width < rectA.x
  );
}

export const getBooleanText = (bool: boolean) => {
  return bool ? '是' : '否';
};

export const setProp = (variable: string, value: any) => {
  document.documentElement.style.setProperty(variable, value);
};

export const getLabel = (items: any[], value: string) => {
  return items.find(e => {
    if (e.value === value) {
      return e;
    }
  })?.label;
};

export const compareDateStrings = (dateString1: string, dateString2: string): number => {
  const date1 = new Date(dateString1);
  const date2 = new Date(dateString2);

  if (date1.getTime() < date2.getTime()) {
    return -1;
  } else if (date1.getTime() > date2.getTime()) {
    return 1;
  } else {
    return 0;
  }
};
