export const jobShowForm = ref(false);

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
  status: '',
  nextValidTime: '',
};

export const jobForm = ref<SystemJob>({
  ...form,
});

export const resetJobForm = () => {
  jobForm.value = {
    ...form,
  };
};
