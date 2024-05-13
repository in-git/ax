import type { SystemJob } from '@/api/modules/monitor/job/types';
import { jobColumns } from './column';
import { jobKeys, jobTable } from './table';

interface CardData {
  id: any;
  raw?: SystemJob;
  items: {
    label: string;
    value: any;
  }[];
}

/* 当前拖拽的元素 */
export const dragstart = (item: CardData) => {
  // 鼠标拖拽触发
};

/* 目标元素，鼠标放下 */
export const drop = (item: CardData) => {
  // 鼠标拖拽放下触发
};

/* 选择卡片 */
export const selectSystemJob = (item: CardData) => {
  if (!jobKeys.value.includes(item.id)) {
    jobKeys.value.push(item.id);
  } else {
    jobKeys.value = jobKeys.value.filter(e => e !== item.id);
  }
};

/* 渲染卡片的内容 */
export const jobCardData = computed(() => {
  let arr: CardData[] = [];
  jobTable.value.data.map((e: SystemJob | any, i) => {
    let items: any = [];
    jobColumns.value.forEach((v: any, k) => {
      const label = v.title;
      const value = e[v.dataIndex as any];
      if (v.dataIndex === 'operation') return;
      items.push({
        label,
        value,
      });
    });
    arr.push({
      id: e['jobId'],
      items,
      raw: e,
    });
  });
  return arr;
});
