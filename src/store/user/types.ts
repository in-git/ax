export interface UserHistory {
  username: string;
  password: string;
}
export interface UserState {
  name?: string;
  token: string;
  history: UserHistory[];
}
