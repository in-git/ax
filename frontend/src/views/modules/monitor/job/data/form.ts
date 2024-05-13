export const jobShowForm = ref(false);
import type { SystemJob } from '@/api/modules/monitor/job/types';
import type { Rule } from 'ant-design-vue/es/form/interface';

const form: SystemJob = {
  createBy: '',
  createTime: '',
  remark: '',
  jobId: 0,
  jobName: '',
  jobGroup: '',
  invokeTarget: '',
  cronExpression: '',
  misfirePolicy: '',
  concurrent: '',
  status: '0',
  nextValidTime: '',
};

// 当前选中的一项，用于删除，编辑
export const jobForm = ref<SystemJob>({
  ...form,
});

// 重置表格
export const jobResetForm = () => {
  jobForm.value = {
    ...form,
  };
};

// 表格校验
export const jobRules: Record<string, Rule[]> = {
  jobName: [{ required: true, trigger: 'change' }],
  jobGroup: [{ required: false, trigger: 'change' }],
  cronExpression: [{ required: false, trigger: 'change' }],
  misfirePolicy: [{ required: false, trigger: 'change' }],
  concurrent: [{ required: false, trigger: 'change' }],
  status: [{ required: false, trigger: 'change' }],
  remark: [{ required: false, trigger: 'change' }],
};
