export interface Notepad {
  editorType: 'textarea';
  content: string;
  id?: string;
}
export interface NotepadInjectData {
  id: string;
  editorType: string;
  content: string;
}
