export const createSvg = (width: string, height: string, svgChildren: string) => {
  const svgNamespace = 'http://www.w3.org/2000/svg';
  const svgElement = document.createElementNS(svgNamespace, 'svg');
  svgElement.setAttribute('xmlns', svgNamespace);
  svgElement.setAttribute('width', width);
  svgElement.setAttribute('height', height);
  svgElement.innerHTML += svgChildren;
  return svgElement;
};
export const pngToSvg = (src: string) => {
  const img = new Image();

  img.onload = () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
    const pngURL = canvas.toDataURL('image/png');
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${img.width}" height="${img.height}"><image href="${pngURL}" width="${img.width}" height="${img.height}" /></svg>`;
    const svgFile = new Blob([svg], { type: 'image/svg+xml' });
    const downloadLink = document.createElement('a');
    downloadLink.download = 'converted.svg';
    downloadLink.href = URL.createObjectURL(svgFile);
    downloadLink.click();
  };

  img.crossOrigin = 'anonymous';
  img.src = src;
};
/* SVG转图片 */
export const svgToImage = (svghtml: string) => {
  const svgData = new Blob([svghtml], { type: 'image/svg+xml' });
  const url = URL.createObjectURL(svgData);
  const image = new Image();

  return new Promise((resolve, reject) => {
    image.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = image.width;
      canvas.height = image.height;

      const context = canvas.getContext('2d') as CanvasRenderingContext2D;
      context.drawImage(image, 0, 0);

      URL.revokeObjectURL(url);

      try {
        resolve(canvas.toDataURL('image/png'));
      } catch (error) {
        reject(error);
      }
    };

    image.onerror = error => {
      URL.revokeObjectURL(url);
      reject(error);
    };

    image.src = url;
  });
};
export const imageToBase64 = (src: string, type?: string, quality?: number): Promise<string> => {
  const canvas = document.createElement('canvas');
  canvas.hidden = true;
  document.body.append(canvas);
  const imgObject = new Image();
  imgObject.src = src;
  imgObject.crossOrigin = 'anonymous';
  return new Promise(res => {
    imgObject.onload = () => {
      canvas.width = imgObject.width;
      canvas.height = imgObject.height;
      const ctx = canvas.getContext('2d');
      ctx?.drawImage(imgObject, 0, 0);
      const base64 = canvas.toDataURL(`image/${type}`, quality);

      canvas.remove();
      res(base64);
    };
  });
};
