import type { Key } from 'ant-design-vue/es/_util/type';
/* 当前选中的文件夹 */
export const currentFolder = ref();

/* 模式 */
export const mode = ref<'table' | 'card'>('card');
/* 右侧已选择的文件夹，或文件 */
export const selectedFolders = ref<Key[]>([]);
export const currentPath = ref<string>('');
/* 左侧选中的文件夹 */
export const selectedPaths = ref();
/* 已复制的文件夹 */
export const copiedPaths = ref<Key[]>([]);
export const folderLoading = ref(false);
