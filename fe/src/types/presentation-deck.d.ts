export interface TextContent {
  type: 'text';
  role: 'heading' | 'paragraph' | 'subheading' | 'bullet-point';
  content: string;
}

export interface ImageContent {
  type: 'image';
  src: string;
  alt: string;
}

export interface CodeContent {
  type: 'code';
  language: string;
  code: string;
}

export interface QuestionContent {
  type: 'question';
  question: string;
  options?: string[];
  answer?: string;
}

export interface ListItem {
  id: string;
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
  id: string;
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
