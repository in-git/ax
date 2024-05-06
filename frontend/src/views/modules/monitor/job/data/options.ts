import type { SegmentedOption } from 'ant-design-vue/es/segmented/src/segmented';

export const misfirePolicyOptions = [
  {
    label: '默认策略',
    value: '0',
  },
  {
    label: '立即执行',
    value: '1',
  },
  {
    label: '执行一次',
    value: '2',
  },
  {
    label: '放弃执行',
    value: '3',
  },
];
export const jobGroupOptions = ref<SegmentedOption[]>([]);
