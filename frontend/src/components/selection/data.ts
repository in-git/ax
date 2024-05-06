import { ref } from 'vue';

export type ISelection = {
  left: number;
  top: number;
  show: boolean;
  width: number;
  height: number;
};

export const selectionKeys = ref<Set<string>>(new Set());
