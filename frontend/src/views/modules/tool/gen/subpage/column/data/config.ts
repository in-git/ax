import Base from '../dynamic-components/Base.vue';
import Field from '../dynamic-components/Field.vue';
export type GenStepType = 'base' | 'backend' | 'field';

export type GenStepItem = {
  type: GenStepType;
  component: any;
  title: string;
  key: number;
};
export const genStepList: GenStepItem[] = [
  {
    type: 'base',
    component: markRaw(Base),
    title: '基本信息',
    key: 0,
  },
  {
    type: 'field',
    component: markRaw(Field),
    title: '基础字段',
    key: 1,
  },
  {
    type: 'backend',
    component: markRaw(Field),
    title: '后端配置',
    key: 2,
  },
];

export const currentStep = ref<GenStepItem>({ ...genStepList[0] });

export const nextStep = (step: number) => {
  currentStep.value = genStepList[step];
};

export const resetStep = () => {
  currentStep.value = { ...genStepList[0] };
};
