interface DesktopNotice {
  content: string;
  title: string;
  type: 'error';
}
export const showNotice = ref(false);

export const noticeList = ref<DesktopNotice[]>([]);
export const notify = (item: DesktopNotice) => {
  noticeList.value.unshift(item);
  showNotice.value = true;
};
