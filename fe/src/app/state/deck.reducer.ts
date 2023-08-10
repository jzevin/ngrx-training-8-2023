import { DeckState } from 'src/types/presentation-deck';

import { createReducer, on } from '@ngrx/store';

export const initialDeckState: Readonly<DeckState> = {
  currentSlide: null,
  slides: [],
};

export const DeckReducer = createReducer(initialDeckState);
