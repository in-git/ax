import type { IQuery } from '@/api/config/types';
import { fetchFeedbackList } from '@/api/modules/system/feedback/feedback';

interface FeedbackData {
  data: SystemFeedback[];
  loading: boolean;
}

export const feedbackQuery = ref<IQuery>({
  pageNum: 1,
  pageSize: 10,
  total: 0,
  orderByColumn: 'create_time',
  isAsc: 'desc',
});

export const feedbackData = ref<FeedbackData>({
  data: [],
  loading: false,
});

export const feedbackList = async () => {
  feedbackData.value.loading = true;
  const { data } = await fetchFeedbackList(feedbackQuery.value);
  feedbackData.value.data = data.rows;
  feedbackQuery.value.total = data.total;
  feedbackData.value.loading = false;
};
export const pageChange = (page: number, pageSize: number) => {
  feedbackQuery.value.pageSize = pageSize;
  feedbackQuery.value.pageNum = page;
  feedbackList();
};
