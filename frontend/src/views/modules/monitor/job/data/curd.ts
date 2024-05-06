import { deleteJob, fetchJobList, jobInfo } from '@/api/modules/monitor/job/job';
import { getOptionsByName } from '@/api/modules/system/dict/dict.data';
import { dictDataToOptions, response } from '@/utils/table/table';
import { jobForm, jobShowForm, resetJobForm } from './form';
import { jobGroupOptions } from './options';
import { jobKeys, jobQuery, jobTable } from './table';

export const jobList = async () => {
  jobTable.value.loading = true;
  /* GET LIST */
  const { data } = await fetchJobList(jobQuery.value);
  jobTable.value.data = data.rows;
  jobQuery.value.total = data.total;
  jobTable.value.loading = false;
};

export const jobEdit = async () => {
  const { data } = await jobInfo(jobForm.value.jobId);
  if (data.data) {
    jobForm.value = data.data;
    jobShowForm.value = true;
  }
};
export const jobCreate = async () => {
  resetJobForm();
  jobShowForm.value = true;
};
export const jobDelete = async (id?: number) => {
  let ids = id ? [id] : jobKeys.value;
  /* Delete ids */
  await response(deleteJob, ids);
  jobList();
};
/* 获取任务分组 */
export const getDict = async () => {
  const { data } = await getOptionsByName('sys_job_group');
  if (data.data) {
    jobGroupOptions.value = dictDataToOptions(data.data);
  }
};
