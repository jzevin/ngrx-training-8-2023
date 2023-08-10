import { Slide } from 'src/types/presentation-deck';

import { createAction, props } from '@ngrx/store';

export const deckActions = {
  slides: {
    load: createAction('[deck] load slides'),
    loadSuccess: createAction(
      '[deck] load slides success',
      props<{ payload: Slide[] }>()
    ),
    loadFailure: createAction(
      '[deck] load slides failure',
      props<{ payload: Error }>()
    ),
    increment: createAction('[user] increment slide'),
    decrement: createAction('[user] decrement slide'),
  },
};
