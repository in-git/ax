import type { FileAttr } from '@/api/modules/file/types';
import type { SysInfo } from '@/api/modules/monitor/server/server';
import type { Key } from 'ant-design-vue/es/_util/type';
import type { DataNode } from 'ant-design-vue/es/tree';
/* 当前选中的文件夹 */
export const currentFolder = ref();
export const fileInfo = ref<FileAttr>();

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

export const sysInfo = ref<SysInfo>();

/* 右侧文件夹中选中的文件 */
export const selectedFile = ref<DataNode>();
