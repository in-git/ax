export interface Coordinates {
  width: number;
  height: number;
  left: number;
  top: number;
}

interface CropperImage {
  src: string;
  width: number;
  height: number;
  transforms: Transforms;
}

interface Transforms {
  rotate: number;
  flip: Flip;
  translateX: number;
  translateY: number;
  scaleX: number;
  scaleY: number;
}

interface Flip {
  horizontal: boolean;
  vertical: boolean;
}

export type CropperData = {
  coordinates: Coordinates;
  image: CropperImage;
  canvas: HTMLCanvasElement;
};
