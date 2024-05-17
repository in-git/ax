import Base from '../dynamic-components/Base.vue';
import Code from '../dynamic-components/Code.vue';
import Field from '../dynamic-components/Field.vue';
export type GenStepType = 'base' | 'code' | 'field';

export enum GenStepEnum {
  BASE = 0,
  FIELD = 1,
  CODE = 2,
}
export type GenStepItem = {
  type: GenStepType;
  component: any;
  title: string;
  key: GenStepEnum;
};

export const genStepList: GenStepItem[] = [
  {
    type: 'base',
    component: markRaw(Base),
    title: '基本信息',
    key: GenStepEnum.BASE,
  },
  {
    type: 'field',
    component: markRaw(Field),
    title: '基础字段',
    key: GenStepEnum.FIELD,
  },
  {
    type: 'code',
    component: markRaw(Code),
    title: '代码配置',
    key: GenStepEnum.CODE,
  },
];

export const currentStep = ref<GenStepItem>({ ...genStepList[0] });

export const nextStep = (step: number) => {
  currentStep.value = genStepList[step];
};

export const resetStep = () => {
  currentStep.value = { ...genStepList[0] };
};
