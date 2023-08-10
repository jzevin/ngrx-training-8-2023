import { DeckState } from 'src/types/presentation-deck';

import { createReducer, on } from '@ngrx/store';

import { deckActions } from './deck.actions';

export const initialDeckState: Readonly<DeckState> = {
  currentSlide: null,
  slides: [],
};

export const DeckReducer = createReducer(
  initialDeckState,
  on(deckActions.slides.loadSuccess, (state, { payload }) => {
    const newState: DeckState = {
      ...state,
      slides: payload,
      currentSlide: payload[0],
    };
    return newState;
  }),
  on(deckActions.slides.increment, (state) => {
    const newState: DeckState = { ...state }; // necessary as it is Readonly
    // increment logic here
    return newState;
  }),
  on(deckActions.slides.decrement, (state) => {
    const newState: DeckState = { ...state };
    // decrement logic here
    return newState;
  })
);
