export interface TextContent {
  type: 'text';
  role: 'heading' | 'paragraph' | 'subheading' | 'list-item';
  content: string;
}

export interface ImageContent {
  type: 'image';
  src: string;
  alt: string;
  class?: string;
}

export interface CodeContent {
  type: 'code';
  language: string;
  code: string;
}

export interface QuestionContent {
  type: 'question';
  question: string;
  options: string[];
  answer: number;
}

export interface ListItem {
  type: 'text';
  role: 'list-item';
  order?: number;
  content: string;
}

export interface ListContent {
  type: 'list';
  listType: 'ordered' | 'unordered';
  items: ListItem[];
}

export type SlideContent =
  | TextContent
  | ImageContent
  | CodeContent
  | QuestionContent
  | ListContent;

export interface Slide {
  id: number;
  title: string;
  contents: SlideContent[];
  notes?: string;
}

export interface PresentationDeck {
  id: string;
  currentSlide: string;
  slides: Slide[];
}

export interface AppState {
  presentation: PresentationDeck;
}
