<template>
  <div>
    <img :src="getSrc()" width="32" />
  </div>
</template>

<script setup lang="ts">
const resource = import.meta.glob('../../assets/*.png');

import errorPng from '../assets/error.png';
const regex: RegExp = /\((\d+)\)\.png/;

interface PathObject {
  index: number;
  src: string;
}
const images: PathObject[] = [];

Object.keys(resource).map(e => {
  images.push({
    index: Number(e.match(regex)![1] || '-1'),
    src: new URL(e, import.meta.url).href,
  });
});

const props = defineProps<{
  type: number;
}>();

const getSrc = (): string => {
  return (
    images.find(e => {
      if (e.index === props.type) {
        return e;
      }
    })?.src || errorPng
  );
};
</script>

<style lang="scss" scoped></style>
