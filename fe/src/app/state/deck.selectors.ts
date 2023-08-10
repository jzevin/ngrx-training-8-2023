import { DeckState } from 'src/types/presentation-deck';

import { createFeatureSelector, createSelector } from '@ngrx/store';

const deckFeature = createFeatureSelector<DeckState>('presentation');

export const deckSelectors = {
  deck: createSelector(deckFeature, (state: DeckState) => state),
};
