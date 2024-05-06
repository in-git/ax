import axios from 'axios';

const http = axios.create();

interface Stared {
  id: number;
  login: string;
  name: string;
  avatar_url: string;
  url: string;
  html_url: string;
  remark: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  star_at: string;
}
export const startedList = ref<Stared[]>([]);

export const getStars = async () => {
  const { data } = await http.get<Stared[]>(
    `https://gitee.com/api/v5/repos/in-git/ax/stargazers?page=1&per_page=20`,
  );
  startedList.value = data;
};
