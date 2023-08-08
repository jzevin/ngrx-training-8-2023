import { PresentationDeck } from 'src/types/presentation-deck';

import { createReducer, on } from '@ngrx/store';

export const initialDeckState: Readonly<PresentationDeck> = {
  currentSlide: null,
  slides: [],
};

export const DeckReducer = createReducer(initialDeckState);
