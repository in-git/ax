export interface Notepad {
  editorType: 'textarea';
  content: string;
}
export const notepad = ref<Notepad>({
  editorType: 'textarea',
  content: '',
});
