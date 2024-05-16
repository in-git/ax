export interface Notepad {
  editorType: 'textarea';
  content: string;
  id?: string;
}
export type NotepadViewMode = 'text' | 'rich-text' | 'markdown';
