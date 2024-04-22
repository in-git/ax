import { feedbackResetForm, feedbackShowForm,feedbackForm } from './form';
import { feedbackKeys, feedbackQuery, feedbackTable } from './table';
import {
  deleteFeedback,
  fetchFeedbackById ,
  fetchFeedbackList,
  exportFeedback
} from '@/api/modules/system/feedback/feedback';
import { response } from '@/utils/table/table';

export const feedbackList = async () => {
  feedbackTable.value.loading = true;
  const { data } = await fetchFeedbackList(feedbackQuery.value);
  feedbackTable.value.data = data.rows;
  feedbackQuery.value.total = data.total;
  feedbackTable.value.loading = false;
};

export const feedbackEdit = async (id?: number) => {
    let targetId: number = id ? id : feedbackKeys.value[0];
    feedbackTable.value.loading = true;
    const { data } = await fetchFeedbackById(targetId);
    if (data.data) {
        feedbackForm.value = data.data;
        feedbackShowForm.value = true;
    }
    feedbackTable.value.loading = false;
};

export const feedbackCreate = async () => {
  feedbackResetForm();
  feedbackShowForm.value = true;
};

export const feedbackDelete = async (id?: number) => {
  let ids = id ? [id] : feedbackKeys.value;
  await response(deleteFeedback, ids);
  await feedbackList();
   feedbackKeys.value=[]
};
// 导出EXCEL文件
export const feedbackExport = () => {
  return exportFeedback({
    pageNum: feedbackQuery.value.pageNum,
    pageSize: feedbackQuery.value.pageSize,
  });
};
