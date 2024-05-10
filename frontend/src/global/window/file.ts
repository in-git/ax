import { openImage, openNotepad } from './widget';

export const settleFile = async (type: string, data: string) => {
  fileMap[type] && fileMap[type](data);
};

type Map = {
  [key: string]: (content: string) => any;
};

const fileMap: Map = {
  text(text: string) {
    openNotepad(text);
  },
  image(src: string) {
    openImage(src);
  },
};
