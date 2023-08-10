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
    const currentIndex = state.slides.findIndex(
      (slide) => slide.id === state.currentSlide?.id
    );
    const nextIndex = currentIndex + 1;
    if (nextIndex < state.slides.length) {
      newState.currentSlide = state.slides[nextIndex];
    }
    return newState;
  }),
  on(deckActions.slides.decrement, (state) => {
    const newState: DeckState = { ...state };
    // decrement logic here
    const currentIndex = state.slides.findIndex(
      (slide) => slide.id === state.currentSlide?.id
    );
    const nextIndex = currentIndex - 1;
    if (nextIndex >= 0) {
      newState.currentSlide = state.slides[nextIndex];
    }
    return newState;
  })
);
