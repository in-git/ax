import type { SegmentedOption } from 'ant-design-vue/es/segmented/src/segmented';

export const showSetting = ref<boolean>(false);
export const gptNavOptions: SegmentedOption[] = [
  {
    title: 'Gpt设置',
    label: 'Gpt设置',
    value: 'gpt',
  },
  {
    label: '开发者中心',
    title: '开发者中心',
    value: 'developer',
  },
];
